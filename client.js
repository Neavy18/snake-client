const net = require("net");

const connect = function(){
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.on('data',(data) => {
    console.log("Successfully connected to game server");
  });

  conn.write(
    "Name: SNU"
  )
  conn.on('data',(data) => {
    console.log(data.toString());
    //console.log("Successfully connected to game server");
    //conn.write("Name: SNU") 
    conn.end();
  });

  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect,

};