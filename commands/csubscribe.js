const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let channel = client.channels.get('475330079426347018');
  let text = args.join(" ");
  let embed = new Discord.RichEmbed()
    .setColor("36393F")
    .setAuthor(`<@&475330742080241664>`)
    .addField(`Context`, text);
    channel.send(embed);
}

module.exports.help = {
  name: "csubscribe"
}
