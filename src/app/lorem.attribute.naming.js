const { AttributeNaming } = require('../api/attribute.naming');
const { ipsum } = require('./ipsum.attribute.naming');
const { dolor } = require('./dolor.param.naming');

class LoremAttributeNaming extends AttributeNaming {
    onInit() {
        this.config('lorem');
    }

    get ipsum() {
        return ipsum(this.text());
    }

    dolor(naming) {
        return dolor(this.text()).param(naming);
    }
}

module.exports.lorem = () => new LoremAttributeNaming();