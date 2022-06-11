const { AttributeNaming } = require('../api/attribute.naming');

class IpsumAttributeNaming extends AttributeNaming {

    onInit() {
        this.config('ipsum', ' ');
    }
}

module.exports.ipsum = (text) => new IpsumAttributeNaming(text);