var chai = require('chai'); 
var expect = chai.expect;

const { naming } = require('../../src/app/index');

describe("test index", function(){

    it('Test lorem ipsum', function() {

        let result = naming.lorem.ipsum.text();
        
        let expected = 'lorem ipsum';
        expect(expected).to.eql(result)
    })

    it('Test lorem dolor', function() {
        
        let result = naming.lorem.dolor('sit').text();
        
        let expected = 'lorem dolor(sit)';
        expect(expected).to.eql(result)
    })

    it('Test sit lorem dolor', function() {
        
        let result = naming.lorem.dolor(naming.lorem.ipsum.text()).text();
        
        let expected = 'lorem dolor(lorem ipsum)';
        expect(expected).to.eql(result)
    })



})