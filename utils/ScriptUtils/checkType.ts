/*
* 子类项类型
* */
let _typeSonJson = ``;

/*
*  类型特殊处理项
* */
const _fn_special_keys = {
    "object Array":'',
    "object Object":"_specialTypeCheck",
};

/**
 * 检测数据类型
 * @param _value
 */
const _typePrototype = (_value:any) => {
    return Object.prototype.toString.call(_value).slice(1,-1);
}

/*
* 数组类型检测
* */
const _isArrayOfType = (arr:any, type:string) => {
    return Array.isArray(arr) && arr.every(item => typeof item === type);
}

/*
* 对象类型转模板
* */
// @ts-ignore
const _template = (_value:any) => {
    return `
        ${
            Object.keys(_value).map((key:string) => {
                if(
                    _typePrototype(_value[key]) === "object Object"
                ) {
                    return `${key}:{${_template(_value[key])}},\n`
                }else {
                    return `${key}:${_value[key]},\n` 
                }
            }).join(" ")
        }
    `
}

/**
 * 数组类型深层转换
 * @param _name
 * @param _value
 */
const _isArrayFront = (
    _name:string,
    _value:any
) => {
    // _value : 读取数组第一项并生成类型
    _typeSonJson += `
        interface ${_name} {
            ${
                _template(_specialTypeCheck(_value))
            }
        }\n
    `
    return _name;
}

/**
 * 特殊参数类型转换
 * change Object Array types
 * @param _value
 */
const _specialTypeCheck : Function = (_value:any) => {
    let result : any = {};
    for (const _valueKey in _value) {
        if(
            _typePrototype(_value[_valueKey]) === 'object Object'
        ){
            result[_valueKey] = _specialTypeCheck(_value[_valueKey])
        }else if(
            _typePrototype(_value[_valueKey]) === 'object Array'
        ){
            let _arr = _value[_valueKey];
            result[_valueKey] =
                _isArrayOfType(_arr,'string') ? `string[]`
                    : _isArrayOfType(_arr,'number') ? `number[]`
                        : _isArrayOfType(_arr,'object')
                            ? _isArrayFront(
                                _valueKey + 'Type',
                                _value[_valueKey][0]
                            ) : `any[]`
        }else {
            result[_valueKey] = typeof _value[_valueKey];
        }
    }
    return result;
}

/**
 * 根据值返回对应类型
 * typeof keys return keysType
 * @param _name 名称
 * @param _value 类型
 */
const _checkTsType = (
    _name:string,
    _value:{[key:string]:any} | any,
) => {
    let json = `
        interface ${_name} {
            ${
                _template(_specialTypeCheck(_value))
            }
        }
    `
    return `
        <script setup lang="ts">
            ${_typeSonJson}\n
            ${json}
        </script>
    `
}

export {
    _checkTsType,
}
