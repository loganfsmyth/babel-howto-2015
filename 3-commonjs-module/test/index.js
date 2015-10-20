import {expect} from 'chai';

import theDefault, {namedExport} from '../src/index';

describe('index.js', function(){

    it('should export a default export', function(){
        return theDefault().then(result => {
            expect(result).to.eql('this is a default export');
        });
    });

    it('should export a named export', function(){
        return namedExport().then(result => {
            expect(result).to.eql('this is a named export');
        });
    });

});
