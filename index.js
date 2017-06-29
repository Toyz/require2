const extend = require("extend");

const defaults = {
    "return_names": false
}

let options = extend(defaults, {});

class require2 {
    constructor(opt) {
        options = extend(defaults, opt);

        this.imports = options.return_names ? {} : [];
    }

    isArray(ar) {
        return ar instanceof Array
            || Array.isArray(ar)
            || (ar && ar !== Object.prototype && this.isArray(ar.__proto__));
    }

    import() {
        const args = arguments;

        for (let idx in args) {
            if (!this.isArray(args[idx])) {
                let name = args[idx];

                if (options.return_names) {
                    this.imports[name] = require(name);
                } else {
                    this.imports.push(require(name));
                }
            } else {

                this.import.apply(this, args[idx]);
            }
        }

        return this.imports;
    }
}

module.exports = (opt) => {
    return new require2(opt);
}

