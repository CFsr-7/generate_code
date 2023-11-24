import {
    _HTMLAttribute
} from "../utils/fieldUtils";

import {
    _runElementView
} from "../utils/elementUtils";

import {
    _ElementD,
    _ElementVideo
} from "../type/templateType/ElementInterface";
import {_runAttribute} from "../utils/attributeUtils";

/**
 * 返回 DIV 节点元素
 * Return div tags
 * @param _value info
 * @param _content innerText
 * @param _index index key
 */
const _DIV = (_value:_ElementD, _content:any, _index:number) => {
    // 循环渲染 field || context
    let _innerText =
        _value.context ?
            _value.context
            : !_value.field
                ? _content
                : _content[_value.field]
    return `
        <div
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
                        _innerText
                    )
                    : _innerText
            }
        </div>
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

export {
    _DIV,
    _VIDEO,
}
