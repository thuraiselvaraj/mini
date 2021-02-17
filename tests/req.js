sam=20;
var helloWorldA = require("./res");
console.log(helloWorldA===global)
global.name=30
console.log(helloWorldA.name)






