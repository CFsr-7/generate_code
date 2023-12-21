type ObjectValueTypes<T> = {
    [K in keyof T]: T[K] extends object
        ? T[K] extends any[]
            ? T[K][number]
            : ObjectValueTypes<T[K]>
        : unknown;
};

function getObjectValueTypes<T>(obj: T): ObjectValueTypes<T> {
    const result: any = {};

    for (const key in obj) {
        // @ts-ignore
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (Array.isArray(value)) {
                let contextType = value.length > 0 && value[0] ? `${typeof value[0]}[]` : `any[]`
                console.log(contextType)
                result[key] = contextType
            } else if (typeof value === 'object' && value !== null) {
                result[key] = getObjectValueTypes(value);
            } else {
                result[key] = typeof value;
            }
        }
    }

    // @ts-ignore
    return JSON.stringify(result);
}

/**
 * 根据值返回对应类型
 * typeof keys return keysType
 * @param _name 名称
 * @param _value 类型
 */
const _checkTsType = (
    _name:string,
    _value:{[key:string]:any} | any,
) => {
    // 待处理对象和数组类型
    // 1. 写个方法 递归处理类型并返回 `` 串
    let keys : string[] = Object.keys(_value);
    return `
        interface ${_name} {
            ${
                keys.map((key:string,index:number) => {
                    return `${key}:${typeof _value[key]},\n`
                }).join(" ")
            }
        }
    `
}

export {
    getObjectValueTypes
}
