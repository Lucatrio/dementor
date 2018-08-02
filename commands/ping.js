const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send(":ping_pong: Pong!");
    let embed = new Discord.RichEmbed()
        .setColor('36393F')
        .addField('Your ping', m.createdTimestamp - message.createdTimestamp + 'ms')
        .addField('API', Math.round(client.ping) + 'ms')
    m.edit(embed);
}

module.exports.help = {
    name: "ping"
}