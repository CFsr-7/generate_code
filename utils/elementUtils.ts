import {
    _elementKeys
} from "../options/variable/elementV";

/**
 * 返回对应元素标签
 * Return the corresponding element label
 * @param _type
 * @param _Attributes
 * @param _content
 */
const _runElementView = (
    /* 初始值 */
    _type: string = "",
    _Attributes: { [key: string]: string } = {},
    _content: string
) => {
    let keys = Object.keys(_Attributes);
    let attributeString = keys.map((key:string) => {
        `${key}=${_Attributes[key]}`
    }).join(" ");
    return `<${_type} ${attributeString}>${_content}</${_type}>`;
}

/**
 * * 读取元素类型转函数keys
 * * Read element type conversion function keys
 * @param _value
 */
const _runTypeKeys = (_value:string) => {
    // variable keys
    let keys = Object.keys(_elementKeys);
    if(keys.indexOf(_value) >= 0){
        // @ts-ignore
        return _elementKeys[keys[keys.indexOf(_value)]];
    }
    return "";
}

export {
    _runTypeKeys,
    _runElementView,
}
