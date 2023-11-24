import {_publicDom} from "./Index";

// div type
interface _ElementD extends _publicDom {

}

// video type
interface _ElementVideo extends _publicDom {
    src:string,
    type:string,
    muted?:boolean,
    autoplay?:boolean,
    controls?:boolean,
}

export {
    _ElementD,
    _ElementVideo
}
