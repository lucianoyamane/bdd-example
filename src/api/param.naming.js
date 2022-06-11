const { Naming } = require('./naming');

class ParamNaming extends Naming { 

    param(value) {
        this._param = value;
        return this;
    }

    text() {
        let result = [];
        if (this.prefix) {
            result.push(this.prefix);
        }
        
        if (this._separator) {
            result.push(this._separator);
        }
        if (this._param) {
            result.push(`${this._value}(${this._param.text()})`);
        } else {
            result.push(`${this._value}()`)
        }
        return result.join('');
    }

}

module.exports.ParamNaming = ParamNaming;