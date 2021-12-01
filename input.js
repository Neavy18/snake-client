const net = require("net");
const { connect } = require("./client.js")
const conn = connect()

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
console.log(key)
};

setupInput()

module.exports = {setupInput}