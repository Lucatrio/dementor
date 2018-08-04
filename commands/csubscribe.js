const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let channel = client.channels.get("475330079426347018");
  if(message.author.id != '366283647587713034')) return;
  
  let embed = new Discord.RichEmbed()
    .setColor("36393F")
    .addField(`<@&&475330742080241664>`)
    .addField(`Certain role only`, args.join(' '));
  message.channel.send(embed);
}

module.exports.help => {
  name: "csubscribe"
}
