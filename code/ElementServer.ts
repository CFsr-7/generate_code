import {
    _A,
    _VIDEO,
    _AUDIO,
    _SINGLE,
    _ELEMENT_VIEW,
} from "../template/Element";

import {
    _ElementD,
    _ElementA,
    _ElementVideo,
} from "../type/templateType/ElementInterface";

/**
 * 生成单标签
 * generate single tags
 * @param _value
 */
const _element_single = (_value:_ElementD) => {
    return _SINGLE(_value);
}


/**
 * 生成 a 标签
 * generate a tags
 * @param _value
 */
const _element_a = (_value:_ElementA) => {
    return _A(_value);
}

/**
 * 生成视频标签
 * generate video tags
 * @param _value
 */
const _element_video = (_value:_ElementVideo) => {
    return _VIDEO(_value);
}

/**
 * 生成视频标签
 * generate audio tags
 * @param _value
 */
const _element_audio = (_value:_ElementVideo) => {
    return _AUDIO(_value);
}

/**
 * 生成双标签
 * generate div tags
 * @param _value
 */
const _element_view = <T>(_value:_ElementD) => {
    return `
        ${
            _value.data.length ? _value.data.map((
                _item:T,
                _index:number
            ) => {
                return _ELEMENT_VIEW(_value,_item,_index)
            }).join('') : _ELEMENT_VIEW(_value,_value.context,0)
        }
    `
}

export {
    _element_a,
    _element_view,
    _element_video,
    _element_audio,
    _element_single,
}
