const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();
    if(!user) user = message.author;
    else user = message.mentions.users.first();

    let embed = new Discord.RichEmbed()
        .setColor('36393F')
        .setThumbnail(user.displayAvatarURL)
        .addField(`Username`, user.username)
        .addField(`Discriminator`, user.discriminator)
        .addField(`Bot`, user.bot)
        .addField(`Mention`, user.toString());
    message.channel.send(embed);
}

module.exports.help = {
    name: "info"
}
