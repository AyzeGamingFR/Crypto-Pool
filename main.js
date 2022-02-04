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

// wallets rpc clients

if (config["cryptocurrencys"["bitcoin"["mining_enabled"]]] == 1) {
    
    const bitcoin_wallet-client = socket.client();
    bitcoin_wallet-client.connect(config["cryptocurrencys"["bitcoin"["wallet"]]]);
    bitcoin_wallet-client.send("getblocktemplate");
    if (bitcoin_wallet-client.recv() != "") {
        
        Console.log("The bitcoin walet client was able to connect himself to the bitcoin wallet !");
        
    } else {
        
        Console.log("The bitcoin wallet client was not able to connect himself to the bitcoin wallet !");
        
    };
    
};
if (config["cryptocurrencys"["bitcoin-cash"["mining_enabled"]]] == 1) {
    
    const bitcoin-cash_wallet-client = socket.client();
    Console.log("The Bitcoin Cash mining is enabled, the wallet client was created !");
    bitcoin-cash_wallet-client.connect(config["cryptocurrencys"["bitcoin-cash"["wallet"]]]);
    bitcoin-cash_wallet-client.send("getblocktemplate");
    
};
if (config["cryptocurrencys"["dash"["mining_enabled"]]] == 1) {
    
    const dash_wallet-client = socket.client();
    Console.log("The Dash mining is enabled, the wallet client was created !");
    dash_wallet-client.connect(config["cryptocurrencys"["dash"["wallet"]]]);
    dash_wallet-client.send("getblocktemplate");
    if (dash_wallet-client.recv() != "") {
        
        Console.log("");
        
    } else {
        
        Console.log("");
        
    };
    
} else {
    
    Console.log("The Dash mining is disabled, the wallet client was not created");
    
};
