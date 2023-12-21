import {
    _ElementKeysType
} from "../interface/elementVInter";

/*
* 单标签
* */
const _elementSingleKeys: String[] = [
    "br",
    "hr",
    "img",
    "input",
]

/*
* 生成元素函数名集合
* */
const _elementKeys : _ElementKeysType = {

    // 单标签
    br:'_element_single',
    hr:'_element_single',
    img:'_element_single',
    input:'_element_single',

    // 双标签
    p:'_element_view',
    div:'_element_view',
    span:'_element_view',

    // 特殊标签
    a:'_element_a',
    video:'_element_video',
    audio:'_element_audio',

}

export {
    _elementKeys,
    _elementSingleKeys,
}
