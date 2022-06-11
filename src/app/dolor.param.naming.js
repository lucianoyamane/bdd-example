const { ParamNaming } = require('../api/param.naming');

class DolorParamNaming extends ParamNaming {
    onInit() {
        // this.config('dolor', ' ');
        this.value('dolor').separator(' ');
    }
}

module.exports.dolor = (text) => new DolorParamNaming(text);