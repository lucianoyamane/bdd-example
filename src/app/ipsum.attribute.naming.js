const { AttributeNaming } = require('../api/attribute.naming');

class IpsumAttributeNaming extends AttributeNaming {

    onInit() {
        // this.config('ipsum', ' ');
        this.value('ipsum').separator(' ');
    }
}

module.exports.ipsum = (text) => new IpsumAttributeNaming(text);