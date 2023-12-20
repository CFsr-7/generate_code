import {
    _VIDEO,
    _AUDIO,
    _ELEMENT_VIEW,
} from "../template/Element";

import {
    _ElementD,
    _ElementVideo,
} from "../type/templateType/ElementInterface";

/*
* 生成容器标签
* generate div tags
* */
const _element_div = <T>(_value:_ElementD) => {
    return `
        ${
            _value.data.length ? _value.data.map((
                _item:T,
                _index:number
            ) => {
                return _ELEMENT_VIEW(_value,_item,_index)
            }).join('') : _ELEMENT_VIEW(_value,null,0)
        }
    `
}

/*
* 生成视频标签
* generate video tags
* */
const _element_video = (_value:_ElementVideo) => {
    return _VIDEO(_value);
}

/*
* 生成视频标签
* generate audio tags
* */
const _element_audio = (_value:_ElementVideo) => {
    return _AUDIO(_value);
}

export {
    _element_div,
    _element_video,
    _element_audio,
}
