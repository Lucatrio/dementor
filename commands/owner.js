const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let lucatrio = client.emojis.get("475075813226577938");
    let embed = new Discord.RichEmbed()
        .setColor('36393F')
        .addField(`Owner`, 'Lucatrio')
        .setFooter(lucatrio);
    message.channel.send(embed);
}

module.exports.help = {
    name: "owner"
}
