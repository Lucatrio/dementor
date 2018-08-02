const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs');

client.on("ready", () => {
    console.log(`${client.user.username} has logged on with ${client.users.size} users`);
    client.user.setActivity('over azkaban', { type: 'WATCHING' });
});
fs.readdir("./src/", (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let dafunction = require(`./src/${file}`);
        let commandName = file.split('.')[0];

        client.on(commandName, (...args) => dafunction.run(client, ...args));
    });
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
client.login('NDc0NjUzNzI1OTA2OTYwNDI0.DkTnVA.HVRF0l-9COO2oRp5wSohXidCTUI')