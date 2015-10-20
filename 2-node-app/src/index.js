// https://github.com/loganfsmyth/babel-howto-2015

import 'babel/polyfill';

import readFile from './read-file';

readFile()
    .then(data => {
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(err => {
        console.log(err);
    })
