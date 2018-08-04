const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require('fs');
const prefix = 'd:';

client.on("ready", () => {
    console.log(`${client.user.username} has logged on with ${client.users.size} users`);
    client.user.setActivity('over azkaban', { type: 'WATCHING' });
});

client.on("message", async message => {

    let fetched = await db.fetch(`prefix_${message.guild.id}`);
    if(fetched === null) prefix = 'd:';
    else prefix = fetched;
    
    if (message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.log(err);
    }
});
client.login(process.env.TOKEN)
