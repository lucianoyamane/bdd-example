const { Naming } = require('./naming');

class AttributeNaming extends Naming {

    text() {
        let result = [];
        if (this.prefix) {
            result.push(this.prefix);
        }
        if (this.separator) {
            result.push(this._separator);
        }
        result.push(this._value);
        
        return result.join('');
    }

}

module.exports.AttributeNaming = AttributeNaming;