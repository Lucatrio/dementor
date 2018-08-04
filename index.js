const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const db = require('quick.db');

client.on("ready", () => {
    console.log(`${client.user.username} has logged on with ${client.users.size} users`);
    client.user.setActivity('over my overwrite', { type: 'WATCHING' });
});
client.login(process.env.TOKEN)
