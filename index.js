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
        let commandFile = require(`./commands/${command}`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.log(err);
    }
});

client.on("message", async msg => {
    client.on("guildMemberAdd", (GuildMember) => {
        let channel = msg.guild.channels.find("name", "join");
        let embed = new Discord.RichEmbed()
            .setColor("41f467")
            .setAuthor(`${GuildMember.username}`, GuildMember.displayAvatarURL)
            .setFooter(`User joined`)
    });
    
    client.on("guildMemberRemove", (GuildMember) => {
        let channel = msg.guild.channels.find("name", "join");
        let embed = new Discord.RichEmbed()
            .setColor("f44141")
            .setAuthor(`${GuildMember.username}`, GuildMember.displayAvatarURL)
            .setFooter(`User left`)
    });
});
client.login(process.env.TOKEN)
