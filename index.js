const express = require('express');
const http = require('http');


const app = express();
var httpServer = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile('/home/runner/ipgrabber/ip.mp4');
  var your_ip = req.headers['x-forwarded-for'].split(', ')[0];

    require("fs").appendFileSync("log.txt", `${Date()} - ${your_ip}\n`);




});

httpServer.listen(8080); 
