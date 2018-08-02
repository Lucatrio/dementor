const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let user = message.mentions.members.first();
    if(!user) user = client.user;
    else user = message.mentions.members.first();

    if(!user.bot) return;

    let embed = new Discord.RichEmbed()
        .setColor('36393F')
        .setThumbnail(user.displayAvatarURL)
        .addField(`Username`, user.username)
        .addField(`Discriminator`, user.discriminator)
        .addField(`Mention`, user.toString());
    message.channel.send(embed);
}

module.exports.help = {
    name: "botinfo"
}
