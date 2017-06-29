const req = require("../")({
    return_names: false
});

const [os, logger] = req.import("os", "./examples/imports/logger.js");

logger(os.platform());
