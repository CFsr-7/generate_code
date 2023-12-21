import {
    _runElementView
} from "../utils/ElementUtils/elementUtils";

import {
    _ElementA,
    _ElementAudio,
    _ElementD,
    _ElementVideo
} from "../type/templateType/ElementInterface";

import {
    _runInnerHT,
    _runAttribute
} from "../utils/ElementUtils/attributeUtils";


/**
 * 返回音频标签
 * Return audio tags
 * @param _value 标签属性
 */
const _SINGLE = (_value:_ElementD) => {
    return `
        ${
            _runElementView(
                _value.elementType,
                _value.attributes,
            )
        }
    `
}

/**
 * 返回A标签
 * Return a tags
 * @param _value 标签属性
 */
const _A = (_value:_ElementA) => {
    return `
        ${
            _runElementView(
                _value.elementType,
                _value.attributes,
                _runInnerHT(_value,null)
            )
        }
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
                _runAttribute(_value.attributes)
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
                _runAttribute(_value.attributes)
            }
        >
            <source src="${_value.src}" type="${_value.type}" />
        </video>
    `
}

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
                _runAttribute(_value.attributes)
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

export {
    _A,
    _VIDEO,
    _AUDIO,
    _SINGLE,
    _ELEMENT_VIEW,
}
