let object = require("./information");

let cowsay = require("cowsay");

let output = cowsay.say({
  text: `Hello I'm ${object.name} from ${object.campus}`,
  eyes: "oo",
  tongue: "  ",
});

console.log(output);
