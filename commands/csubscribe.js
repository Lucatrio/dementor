const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let channel = client.channels.get('475330079426347018');
  let text = args.join(" ");
  let role = message.guild.roles.find('name', 'Subscribed');
  let embed = new Discord.RichEmbed()
    .setColor("36393F")
    .setAuthor(role.toString())
    .addField(`Context`, text);
  message.react('✔');
  channel.send(embed);
}

module.exports.help = {
  name: "csubscribe"
}
