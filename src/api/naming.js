class Naming {

    constructor(prefix) {
        this.prefix = prefix;
        this.onInit();
    }

    onInit(){};

    value(value) {
        this._value = value;
        return this;
    }

    separator(separator) {
        this._separator = separator;
        return this;
    }

    text() {};
}

module.exports.Naming = Naming;