import {
    _runTypeKeys
} from "./elementUtils";

import {
    _publicDom
} from "../type/templateType/Index";

/**
 * 元素节点代码按照 Sort字段排序
 * Sort element node codes by Sort field
 * @param _list
 */
const _ElementSort = (_list:any) => {
    let codeJson = "";
    return `
        <template>
            ${
                _list.sort((a:_publicDom,b:_publicDom) => a.sort! - b.sort!).map((item:_publicDom) => {
                    codeJson = _runTypeKeys(item.elementType);
                    return `${ codeJson ? codeJson : '' }\n`
                })
            }
        </template>
    `
}

export {
    _ElementSort
}
