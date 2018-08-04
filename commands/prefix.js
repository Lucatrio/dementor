const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Sorry, you need the `MANAGE_SERVER` permission to use this');
  
  db.set(`prefix_${message.guild.id}`, args.join(' ')).then(i => {
    let embed = new Discord.RichEmbed()
      .setColor("36393F")
      .addField(`Successfully`, `Overwrited prefix value now value is **${i}**`);
    message.channel.send(embed);
  })
}

module.exports.help = {
  name: "prefix"
}
