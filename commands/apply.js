const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(message.channel.type != 'dm') return message.channel.send(`Sorry, this command is dm worthy only`);
    try {
        if(!args[0]) return message.channel.send(`Sorry, please put a valid bot invite url`);
        if(!message.content.includes(`https://discordapp.com/oauth2/authorize?client_id=`)) return message.author.send(`Sorry, please input a valid bot invite url`);
        let queue = client.channels.get("474664899553919019");
        let pubqueue = client.channels.get("475291636394360832");
        let url = `[here](${args[0]})`;
        let daembed = new Discord.RichEmbed()
            .setColor("36393F")
            .setAuthor(`${message.author.username} added a bot to the queue`, message.author.displayAvatarURL)
        let embed = new Discord.RichEmbed()
            .setColor("36393F")
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField(`Invite`, url)
            if(message.content.includes('https://discordapp.com/oauth2/authorize?client_id=')) {
                let msg = message.author.send('Thank you for your application, it will be reviewed as soon as possible');
                queue.send(embed).then(damsg => {
                    damsg.react('✔');
                });
                pubqueue.send(daembed).then(damsg1 => {
                    damsg1.react('✔');
                    damsg1.react('🚫');
                }); 
            }
    } catch (err) {
        console.log(err);
    }
}

module.exports.help = {
    name: "apply"
}
