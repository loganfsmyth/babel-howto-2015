// https://github.com/loganfsmyth/babel-howto-2015

import fs from 'fs';
import path from 'path';

function readFile(path){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

function processContent(content){
    return content.split('\n').filter(Boolean).map(line => line.split(',').map(Number));
}

export default function(){
    return readFile(path.join(__dirname, '..', 'file.csv')).then(content => processContent(content));
}
