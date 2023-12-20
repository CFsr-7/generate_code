import beautify from 'js-beautify';
/**
 * HTML代码格式化
 * HTML Codes format
 * 功能:缩进、元素属性换行
 * @param htmlJson
 */
const _HTML_ElementFormat = (htmlJson:string) => {
    return beautify.html(htmlJson, {
        // 缩进
        indent_size: 2,
        // 最大出现行数
        max_preserve_newlines:2,
        // 元素属性换行
        wrap_attributes: 'force',
    });
}

/**
 * JS代码格式化
 * JS Codes format
 * 功能:缩进
 * @param jsJson
 */
const _JS_LogicFormat = (jsJson:string) => {
    return beautify.js(jsJson, {
        // 缩进
        indent_size: 2,
    });
}

/**
 * CSS代码格式化
 * CSS Codes format
 * 功能:缩进
 * @param cssJson
 */
const _CSS_Format = (cssJson:string) => {
    return beautify.css(cssJson, {
        // 缩进
        indent_size: 2,
    });
}


export {
    _CSS_Format,
    _JS_LogicFormat,
    _HTML_ElementFormat
}
