const net = require("net");
const { IP, PORT } = require("./constant");

const connect = function(){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.setEncoding("utf8");
  
  conn.on("connect",(data) => {
    console.log("Successfully connected to game server");  
    conn.write("Name: SNU")
  });

  conn.on("data",(data) => {
    console.log("Data received");  
    console.log(data.toString());
    conn.end();
  });

  return conn;
};


module.exports = {
  connect,
};