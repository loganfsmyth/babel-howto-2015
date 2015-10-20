// https://github.com/loganfsmyth/babel-howto-2015

export function namedExport(){
    return Promise.resolve('this is a named export');
}

export default function defaultExport(){
    return Promise.resolve('this is a default export');
}
