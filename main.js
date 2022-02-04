// npm packages required

const fs = require("fs");
const https = require("https");
const socket = require("socket.io");

// pool files needed

const config = require("./config.json"); // pool configuration
const dashboard = require("./pages/dashboard.html.json");
const miners = require("./pages/miners.html.json");
const pool = require("./pages/pool.html.json");
const settings = require("./pages/settings.html.json");

// pool https server

var https_server = https.createServer();
https_server.on("");
https_server.listen("127.0.0.1", config["servers"["https"["port"]]]);

// wallets rpc client

var wallets_client = socket.client();
wallets_client.on();
