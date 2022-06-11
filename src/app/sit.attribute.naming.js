const { AttributeNaming } = require('../api/attribute.naming');

class SitAttributeNaming extends AttributeNaming {

    onInit() {
        this.value('sit').separator(' ');
    }
}

module.exports.sit = (text) => new SitAttributeNaming(text);