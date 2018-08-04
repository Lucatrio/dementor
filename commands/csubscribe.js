const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(message.author.id != '366283647587713034') return message.react('🚫');
  let channel = client.channels.get('475330079426347018');
  let text = args.join(" ");
  let role = message.guild.roles.find('name', 'Subscribed');
  let embed = new Discord.RichEmbed()
    .setColor("36393F")
    .setDescription(role.toString())
    .addField(`Context`, text);
  message.react('✔');
  channel.send(embed);
}

module.exports.help = {
  name: "csubscribe"
}
