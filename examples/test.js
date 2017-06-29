const req = require("../")({
    return_names: false
});

const [fs, os, system, net] = req.import("fs", "os", ["sys", "net"]);

console.log(os.platform());
