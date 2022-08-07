const R = require("r-script")

var out = R("./ola_mundo.R")
    .data("Ola mundo de dentro do R", 5)
    .callSync();

console.log(out)