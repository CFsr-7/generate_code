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

export {
    _runAttribute
}
