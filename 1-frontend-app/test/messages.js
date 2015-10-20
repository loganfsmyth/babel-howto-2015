import {expect} from 'chai';

import {HELLO} from '../src/messages';

describe('messages', function(){
    it('should export the proper message', function(){
        expect(HELLO).to.eql('hello there, this is welcome text');
    });
});
