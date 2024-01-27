type PlainObject<T = object> = {
  [k in string]: T;
}

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === 'object'
    && value != null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]'
  );
}

// function isArray(value: unknown): value is [] {
//     return Array.isArray(value);
// }

export function cloneDeep<T extends object = object>(obj: T) {
  const target = obj.constructor();
  /* eslint no-restricted-syntax: "off" */
  /* eslint guard-for-in: "off" */
  for (const prop in obj) {
    const value = obj[prop];
    if (isPlainObject(value)) {
      target[prop] = cloneDeep(value);
    } else {
      target[prop] = value;
    }
  }
  return target;
}
