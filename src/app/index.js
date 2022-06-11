const { AttributeNaming } = require('./attribute.naming');
const { ParamNaming } = require('./param.naming');


class LoremNamingAttribute extends AttributeNaming {
    onInit() {
        this.config('lorem');
    }

    get ipsum() {
        return new IpsumNamingAttribute(this.text());
    }

    dolor(value) {
        return new DolorNamingAttribute(this.text()).param(value);
    }
}


class IpsumNamingAttribute extends AttributeNaming {

    onInit() {
        this.config('ipsum', ' ');
    }
}

class DolorNamingAttribute extends ParamNaming {
    onInit() {
        this.config('dolor', ' ');
    }
}


module.exports.naming = {
    get lorem() {
        return new LoremNamingAttribute();
    },
    dolor(value) {
        return new DolorNamingAttribute().param(value);
    }
}