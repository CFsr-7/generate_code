import {
    _elementSingleKeys
} from "../../options/element/variable/elementV";

import {
    _elementKeys
} from "../../options/element/variable/elementV";


/**
 * * 读取元素类型转函数keys
 * * Read element type conversion function keys
 * @param _value
 */
const _runTypeKeys = (_value:string) => {
    // variable keys
    let keys = Object.keys(_elementKeys);
    if(keys.indexOf(_value) >= 0){
        return _elementKeys[keys[keys.indexOf(_value)]];
    }
    return "";
}

/**
 * 返回单双标签
 * 对应元素标签
 * Return the corresponding element label
 * @param _type
 * @param _Attributes
 * @param _content
 */
const _runElementView = (
    /* 初始值 */
    _type: string = "",
    _Attributes: { [key: string]: string } = {},
    _content?: string
) => {
    // get Keys
    let keys = Object.keys(_Attributes);
    // set Key Keys
    let attributeString = keys.map((key:string) => {
        return `${key}=${_Attributes[key]}`
    }).join(" ");
    // 避免为空
    if(attributeString) {
        attributeString = ` ${attributeString}`;
    }
    // return single element
    if(_elementSingleKeys.indexOf(_type) > -1){
        return `<${_type}${attributeString} />`;
    }
    // return 正常流程
    return `<${_type}${attributeString}>${_content}</${_type}>`;
}

export {
    _runTypeKeys,
    _runElementView,
}
