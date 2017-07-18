var tmi = require("tmi.js");
var config = require("./config");

var client = new tmi.client({
    identity: {
        username: config.bot,
        password: config.token
    },
    channels: [`#${config.channel}`]
});

// Connect the client to the server..
client.connect();
