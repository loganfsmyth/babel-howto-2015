import {expect} from 'chai';

import readFile from '../src/read-file';

describe('read-file', function(){

    it('should read the file and get numbers', function(){
        return readFile().then(result => {
            expect(result).to.eql([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ]);
        });
    });

});
