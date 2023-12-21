import {_publicDom} from "./Index";

// div type
interface _ElementD extends _publicDom {

}

// a type
interface _ElementA extends _publicDom {
    src:string,
    type:string,
}

// video type
interface _ElementVideo extends _publicDom {
    src:string,
    type:string,
    muted?:boolean,
    autoplay?:boolean,
    controls?:boolean,
}

// video type
interface _ElementAudio extends _publicDom {
    src:string,
    type:string,
    muted?:boolean,
    loop?:boolean,
    preload?:string,
    volume?:number,
    autoplay?:boolean,
    controls?:boolean,
}

export {
    _ElementD,
    _ElementA,
    _ElementVideo,
    _ElementAudio
}
