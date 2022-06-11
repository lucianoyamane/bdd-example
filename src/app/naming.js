class Naming {

    constructor(prefix) {
        this.prefix = prefix;
        this.onInit();
    }

    onInit(){};

    config(value, separator) {
        this.value = value;
        this.separator = separator;
        return this;
    }

    text(text) {};
}

module.exports.Naming = Naming;