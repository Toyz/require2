# Extend Require

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm install ext-require --save
```

### Options
_return_names_: Allows you to return the objects as a array with there names (doesn't sanitize names) [Default: false]

### Basic Examples
```js
const req = require("../")({
    return_names: false
});
const [os, logger] = req.import("os", "./examples/imports/logger.js");
logger(os.platform());
```

