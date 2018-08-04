const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(message.guild.id != '474649915369193484') return;
  let role = message.guild.roles.find('name', 'Subscribed');
  message.member.addRole(role);
  message.channel.send(`You have been sucessfully subscribed to the dementor showcase guild`);
}

module.exports.help = {
  name: "subscribe"
}
