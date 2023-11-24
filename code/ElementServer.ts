import {
    _DIV,
    _VIDEO
} from "../template/Element";

import {
    _ElementD,
    _ElementVideo,
} from "../type/templateType/ElementInterface";

import {
    _CSS_Format,
    _JS_LogicFormat,
    _HTML_ElementFormat,
} from "../utils/formatUtils";

/*
* 生成容器标签
* generate div tags
* */
const _element_div = <T>(_value:_ElementD) => {
    return _HTML_ElementFormat(`
        ${
            _value.data.length ? _value.data.map((
                _item:T,
                _index:number
            ) => {
                return _DIV(_value,_item,_index)
            }).join('') : _DIV(_value,null,0)
        }
    `)
}

/*
* 生成视频标签
* generate video tags
* */
const _element_video = (_value:_ElementVideo) => {
    return _VIDEO(_value);
}

export {
    _element_div,
    _element_video,
}
