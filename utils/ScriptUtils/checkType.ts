import {
    generateRandomName
} from "../nameUtils";

let _info : any = {};
/*
* 子类项类型
* */
let _typeSonJson:string[] = [];

/*
*  基础类型
* */
const _typeKeys = ["string","number","boolean"];

/*
* 复杂数据
* */
const complex = ["object Object","object Array"]

/**
 * 检测数据类型
 * @param _value
 */
const _typePrototype = (_value:any) => {
    return Object.prototype.toString.call(_value).slice(1,-1);
}

/*
* 处理数组类型
* */
const _arrayCheckType = (
    _value:any,
    _valueKey:string = "interType"
) => {
    /*
    * [object] 情况下名称为 Type
    * _checkTsType 将处理 Type 情况。
    * */
    console.log(_value)
    return !_value.length
        ? `any[]` : _isArrayOfType(_value,'string')
            ? `string[]` : _isArrayOfType(_value,'number')
                ? `number[]` :  _isArrayOfType(_value,'boolean')
                    ? `boolean[]` : _isArrayOfType(_value,'object')
                        ? _isArrayFront(`${_valueKey}`, _value[0]) : `any[]`
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
    // 1. 处理简单数组和基本类型
    // 2. 处理单个复杂数组对象类型
    if(typeof _value === 'string'){
        return {
            interType:'type',
            type:`${_value}`,
        }
    }
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
    /*
    * 此处转换源为 Object
    * 无需处理 type interface 逻辑
    * */
    console.log(_value,"多数组情况下名称")
    _info.content = _value;
    _typeSonJson.push(
        `
            interface ${_name} {
                ${
                    _template(
                        _specialTypeCheck(_info)
                    )
                }
             }\n
        `
    )
    return `${ _name }[]`;
}

/**
 * 特殊参数类型转换
 * change Object Array types
 * @param _params
 */
const _specialTypeCheck : Function = (_params:any) => {
    // 参数源
    let _value = _params.content;
    // 基本数据类型 check
    if(_typeKeys.indexOf(typeof _value) > -1) {
        return typeof _value
    }
    // array check
    if (_typePrototype(_value) === 'object Array') {
        console.log('？？？')
        // 数组类型
        return _arrayCheckType(
            _value,
            // 数组[0] interface 名称
            _params.arrConfig.interName
        )
    }
    // object check
    let result : any = {};
    for (const _valueKey in _value) {
        if(
            _typePrototype(_value[_valueKey]) === 'object Object'
        ){
            console.log('哈哈',_value[_valueKey])
            _info.content = _value[_valueKey];
            result[_valueKey] = _specialTypeCheck(_info)
        }else if(
            _typePrototype(_value[_valueKey]) === 'object Array'
        ){
            console.log('？')
            let isTrueInters : string | any;
            if(
                _params.objConfig &&
                _params.objConfig.isTrueInters !== ""
            ){
                console.log(_params.objConfig.isTrueInters)
                isTrueInters = generateRandomName(_params.objConfig.isTrueInters)
            }
            result[_valueKey] = _arrayCheckType(
                // 数组[0]_数据源
                _value[_valueKey],
                // interface 名称, isTrueInters_预防名称重复问题
                _valueKey + isTrueInters
            );
        }else {
            result[_valueKey] = typeof _value[_valueKey];
        }
    }
    console.log(result,'-------')
    return result
}

/**
 * 根据值返回对应类型
 * typeof keys return keysType
 * @param _data
 */
const _checkTsType = (_data:any) => {
    _info = _data;
    let result = _template(
        _specialTypeCheck(
            {
                // 参数源
                content:_info.content,
                // 参数源为数组配置
                arrConfig:_info.arrConfig,
                // 参数源为对象配置
                objConfig:_info.objConfig,
            }
        )
    )
    let json = `
        ${
            !result.interType
                ? `
                    interface ${_info.interName} {
                        ${
                            result
                        }
                    }\n
               `
                : `${ result.interType } ${_info.typeName} = ${ result.type }`
        }
    `
    return `
        <script setup lang="ts">
            ${
                _typeSonJson.map((_value:string) => {
                    return `${_value}`
                }).join(" ")
            }\n
            ${json}
        </script>
    `
}

export {
    _checkTsType,
}
