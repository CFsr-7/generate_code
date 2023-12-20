interface _publicDom {
    /* 层级信息 */
    pId?:string,

    /* port */
    sort?:number

    /* 元素节点属性信息 */
    // 节点属性
    id?:string,
    class?:string,
    style?:object | string,

    /* 生成当前元素类型 */
    elementType:string,

    /* 当前循环内容信息 */
    // 字段类型
    fieldType:any,
    // 展示字段
    field?:string,
    // 循环数据及和
    data?:Array<any> | undefined | any,
    // 无循环展示内容
    context?:string,

    /* 子级循环内容信息 */
    // 子级循环数据(暂未支持)
    children?:Array<any>

    /* 内容被元素包裹信息 */
    // 包裹元素的类型
    runElementType?:string,
    // 包裹元素的属性
    _sonAttributes?:{ [key: string]: string },
    // 当前展示数据是否被元素包裹
    isTrueContain?:boolean,
}

export {
    _publicDom
}
