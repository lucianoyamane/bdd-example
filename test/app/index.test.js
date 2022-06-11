var chai = require('chai'); 
var expect = chai.expect;

const { naming } = require('../../src/app/index');

describe("test index", function(){

    it('Test lorem ipsum', function() {

        let result = naming.lorem.ipsum.text();
        
        let expected = 'lorem ipsum';
        expect(expected).to.eql(result)
    })

    it('Test override separator', function() {
        
        let result = naming.lorem.dolor(naming.sit.separator('_')).text();
        
        let expected = 'lorem dolor(_sit)';
        expect(expected).to.eql(result)
    })

    it('Test naming as param', function() {
        
        let result = naming.lorem.dolor(naming.lorem.ipsum).text();
        
        let expected = 'lorem dolor(lorem ipsum)';
        expect(expected).to.eql(result)
    })



})