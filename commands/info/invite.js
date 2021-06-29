const { MessageEmbed } = require('discord.js');
const color = '#00ccff'

module.exports = {
  name: 'invite',
  category: 'info', 
  description: 'Add the bot by invite.',
  usage: '', 
  run: (client, message, args) => {
    let embed = new MessageEmbed()
    .setColor(color)
    .setDescription('Invite me to your server by [clicking here](https://discord.com/api/oauth2/authorize?client_id=803482003869663273&permissions=8&scope=bot).')
    .setImage('https://i.imgur.com/Y1Mgxa5.jpg');
    message.channel.send(embed);
  }
};