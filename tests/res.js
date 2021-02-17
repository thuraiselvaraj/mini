var HelloWorld = (function () {
    this.greeting = "Hello, World";
    console.log(this===global)
    return this;
  })();
console.log(sam)
module.exports = HelloWorld;