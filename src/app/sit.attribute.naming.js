const { AttributeNaming } = require('../api/attribute.naming');

class SitAttributeNaming extends AttributeNaming {

    onInit() {
        // this.config('sit', ' ');
        this.value('sit').separator(' ');
    }
}

module.exports.sit = (text) => new SitAttributeNaming(text);