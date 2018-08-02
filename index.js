const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs');

client.on("ready", () => {
    console.log(`${client.user.username} has logged on with ${client.users.size} users`);
    client.user.setActivity('over azkaban', { type: 'WATCHING' });
});

client.on("message", async message => {

    let prefix = 'd:';

    if (message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./src/${command}`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.log(err);
    }
});
client.login(process.env.TOKEN)