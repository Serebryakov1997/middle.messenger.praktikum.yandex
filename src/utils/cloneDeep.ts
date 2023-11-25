type PlainObject<T = object> = {
    [k in string]: T;
}

function isPlainObject(value: unknown): value is PlainObject {
    return (
        typeof value == 'object' &&
        value != null &&
        value.constructor === Object &&
        Object.prototype.toString.call(value) === '[object Object]'
    );
}

// function isArray(value: unknown): value is [] {
//     return Array.isArray(value);
// }


export function cloneDeep<T extends object = object>(obj: T) {
    let target = obj.constructor();
    for (let prop in obj) {
        let value = obj[prop];
        if (isPlainObject(value)) {
            target[prop] = cloneDeep(value);
        } else {
            target[prop] = value;
        }
    }
    return target;
}

// export default cloneDeep;
