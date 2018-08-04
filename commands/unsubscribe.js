const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(message.guild.id != '474649915369193484') return;
  let role = message.guild.roles.find('name', 'Subscribed');
  if(message.member.hasRole(role)) return message.channel.send(`You silly person! You already have the role :-:`);
  message.member.removeRole(role);
  message.channel.send(`You have been sucessfully unsubscribed from the dementor showcase guild`);
}

module.exports.help = {
  name: "unsubscribe"
}
