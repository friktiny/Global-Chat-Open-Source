const { MessageEmbed } = require('discord.js');
const color = '#00ccff'

module.exports = {
  name: 'botinfo',
  description: 'Information about the bot.', 
  aliases: ['infobot'],
  usage: '',
  category: 'info',
  run: (client, message, args) => {
    let dev = client.users.cache.get('711969991427227729');
    
    let embed = new MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setColor(color)
    .addFields(
        {
          name: 'Bot tag',
          value: client.user.tag,
        },
        {
          name: 'Version',
          value: '2.1.3',
        },
        {
          name: "Server's command prefix",
          value: 'g-',
        },
        {
          name: 'Developer',
          value: `${dev} (\`${dev.id}\`)`
        },
        {
          name: 'Time since last restart',
          value: `${process.uptime().toFixed(2)}s`,
        },
        {
          name: 'Server count',
          value: client.guilds.cache.size,
        },
        {
          name: 'Total members',
          value: client.users.cache.size,
        },
        {
          name: 'My server',
          value: '[Global Chat™ Support](https://discord.gg/Eye3axccgw)'
        }
      );
      
      message.channel.send(embed);
  }
};
