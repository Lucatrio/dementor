const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor('36393F')
        .addField(`Users `, client.users.size)
        .addField(`Channels `, client.channels.size)
    message.channel.send(embed);
}

module.exports.help = {
    name: "stats"
}
