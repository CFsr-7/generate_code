/**
 * 检测属性值
 * 各类型兼容变量是否为空
 * Are all types of compatible variables empty
 * @param _value
 */
const _HTMLAttribute = (_value:any) => {
    // types
    let context :
        string |
        number |
        object |
        boolean |
        Array<any>;
    // variable is undefined return ""
    if(
        _value == undefined
    ) return "";

    switch (_value){
        case
            Array.isArray(_value) &&
            _value.length:

            context = _value;
            break;
        case
            typeof _value == "object" &&
            Object.keys(_value).length :

            context = _value;
            break;

        case _value :
            context = _value;
            break;
        default :
            context = "";
            break;
    }
    return context;
}

export {
    _HTMLAttribute,
}
