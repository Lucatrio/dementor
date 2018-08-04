const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (client, message, args) => {
  db.fetch(`prefix_${message.guild.id}`).then(i1 => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(`Hello, ${message.author.username} the prefix for this guild is ${i1}. If it says undefined the prefix is **d:**`);
  })
    
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
