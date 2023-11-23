import { Indexed, merge } from './merge';

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
        [key]: acc
    }), value as any);

    console.log('result: ', result);
    console.log('result user: ', result.user);
    console.log('result merge: ', merge(object as Indexed, result));

    return merge(object as Indexed, result);
    // return result;
}
