import {
    _element_view,
    _element_video
} from "./code/ElementServer"

import {
    _CSS_Format,
    _JS_LogicFormat,
    _HTML_ElementFormat,
} from "./utils/formatUtils";

import {
    _checkTsType
} from "./utils/ScriptUtils/checkType";

import {
    _ElementSort
} from "./utils/ElementUtils/elementSortUtils";


const CodeUtils = {
    // 自动转换类型
    _checkTsType,

    // 元素排序
    _ElementSort,

    // 创建元素
    _element_view,
    _element_video,

    // 元素格式化
    _CSS_Format,
    _JS_LogicFormat,
    _HTML_ElementFormat,
}

export default CodeUtils
