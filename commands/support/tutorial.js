const { MessageEmbed } = require('discord.js');
module.exports = {
  name: 'tutorial',
  description: 'Get a short tutorial on how to use Global Chat™.',
  aliases: ['tuto', 'ttr', 'ttrl'],
  usage: '',
  category: 'support',
  run: (client, message, args) => {
    let embed = new MessageEmbed()
    .setColor('#00ccff')
    .setTitle('Tutorial')
    .setDescription(`To use Global Chat™, simply change the topic of some channel to \`(country acronym) - global on\`, after doing this, type \`g-language (country acronym)\` in any chat, and Global Chat™ will be working, only send a message on the specific topic channel that it will send to the other servers with the same topic.\n\n**- Thank you for choosing Global Chat™ as communication bot on your server.**`)
    .setImage(`https://cdn.discordapp.com/attachments/823001039917547540/833335778447982602/tutorial1.gif`)
    .setFooter('・' + client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }));
    
    message.channel.send(embed).then(msg => {
      msg.react(':msg:833341626281623573');
    });
}
};
