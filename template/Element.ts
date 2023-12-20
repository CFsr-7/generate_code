import {
    _runElementView
} from "../utils/ElementUtils/elementUtils";

import {
    _ElementAudio,
    _ElementD,
    _ElementVideo
} from "../type/templateType/ElementInterface";

import {
    _runInnerHT,
    _runAttribute
} from "../utils/ElementUtils/attributeUtils";

/**
 * 返回节点元素
 * Return div tags
 * @param _value info
 * @param _content innerText
 * @param _index index key
 */
const _ELEMENT_VIEW = (_value:_ElementD, _content:any, _index:number) => {
    // _value.elementType
    // 生成对应类型元素并展示其内容
    return `
        <${_value.elementType}
            ${
                _runAttribute({
                    id:_value.id,
                    class:_value.class,
                    style:_value.style,
                })
            }
        >
            ${
                _value.isTrueContain ? 
                    _runElementView(
                        _value.runElementType,
                        _value._sonAttributes,
                        _runInnerHT(_value,_content)
                    )
                    : _runInnerHT(_value,_content)
            }
        </${_value.elementType}>
    `
}

/**
 * 返回音频标签
 * Return audio tags
 * @param _value 标签属性
 */
const _AUDIO = (_value:_ElementAudio) => {
    return `
        <audio 
            ${
                _runAttribute({
                    id:_value.id,
                    class:_value.class,
                    style:_value.style,
                    loop:_value.loop,
                    muted:_value.muted,
                    volume:_value.volume,
                    preload:_value.preload,
                })
            }
        >
            <source src="${_value.src}" type="${_value.type}" />
        </>
    `
}

/**
 * 返回视频标签
 * Return video tags
 * @param _value 标签属性
 */
const _VIDEO = (_value:_ElementVideo) => {
        return `
        <video 
            ${
            _runAttribute({
                style:_value.style,
                muted:_value.muted,
                controls:_value.controls,
                autoplay:_value.autoplay
            })
        }
        >
            <source src="${_value.src}" type="${_value.type}" />
        </video>
    `
    }

/**
 * 返回音频标签
 * Return audio tags
 * @param _value 标签属性
 */

export {
    _VIDEO,
    _AUDIO,
    _ELEMENT_VIEW,
}
