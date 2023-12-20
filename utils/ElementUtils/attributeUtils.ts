import {
    _HTMLAttribute
} from "./fieldUtils";

/**
 * 非必填属性为空过滤
 * Non-mandatory attributes are empty for filtering
 * @param _valueInfo
 */
const _runAttribute = (_valueInfo:any) => {
    // object field keys
    let keys = Object.keys(_valueInfo);
    // attributes string
    const attributes : string = keys.map((item:string) => {
        // attribute field is true
        if(_HTMLAttribute(_valueInfo[item])){
            return `${item}="${_HTMLAttribute(_valueInfo[item])}"`
        }
    }).join(" ");
    return attributes ? ` ${attributes}` : '';
}

/**
 * 渲染 - 读取展示内容
 * @param _value
 * @param _content
 */
const _runInnerHT = (_value:any,_content:any) => {
    // 此处属性为 any 避免兼容问题
    return _value.context
                ? _value.context
                : !_value.field
                    ? _content
                    : _content[_value.field]
}

export {
    _runInnerHT,
    _runAttribute
}
