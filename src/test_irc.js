const tmi = require('tmi.js');
const username = process.env.TWITCH_USERNAME;
const channel = username;
const token = process.env.TWITCH_TOKEN;
const password = `oauth:${token}`;

const client = new tmi.Client({
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username,
        password,
    },
    channels: [channel],
});

(async function(client) {
    await client.connect();
    await client.say(channel, 'from bot');
    await client.disconnect();
})(client);
