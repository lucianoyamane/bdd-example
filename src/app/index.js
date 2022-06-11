const { lorem } = require('./lorem.attribute.naming');
const { sit } = require('./sit.attribute.naming');
module.exports.naming = {
    get lorem() {
        return lorem();
    },
    get sit() {
        return sit();
    }
}