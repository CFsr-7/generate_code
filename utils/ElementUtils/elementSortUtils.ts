import {
    _runTypeKeys
} from "./elementUtils";

import {
    _publicDom
} from "../../type/templateType/Index";

import
    * as ElementAll
from "../../code/ElementServer"

/**
 * create DomJson
 * 元素节点代码按照 Sort字段排序
 * Sort element node codes by Sort field
 * @param _list
 */
const _ElementSort = (_list:any) => {
    let codeJson = "";
    return `
        <template>
            ${
                _list.sort((a:any,b:any) => a.sort! - b.sort!).map(
                    (item:_publicDom) => {
                        // @ts-ignore
                        codeJson = ElementAll[_runTypeKeys(item.elementType)](item);
                        return `${ codeJson ? codeJson : '' }`
                    }
                ).join('')
            }
        </template>
    `
}

export {
    _ElementSort
}
