const { lorem } = require('./lorem.attribute.naming');
module.exports.naming = {
    get lorem() {
        return lorem();
    }
}