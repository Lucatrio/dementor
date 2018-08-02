const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setColor('36393F')
        .addField(`d:help`, 'list commands')
        .addField(`d:ping`, 'see your ping and the api\'s ping')
        .addField(`d:stats`, 'see statistics for the bot')
        .addField(`d:apply`, 'apply for your bot to be on the the guild');
    message.channel.send(embed);
}

module.exports.help = {
    name: "help"
}