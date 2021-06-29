const { MessageEmbed } = require('discord.js');
const color = '#00ccff'

module.exports = {
  name: 'rules',
  description: 'See Global Chat™ rules.',
  aliases: ['rule', 'regras', 'regra'],
  usage: '',
  category: 'info',
  run: (client, message, args) => {
    let embed = new MessageEmbed()
    .setColor(color)
    .setAuthor('・' + client.user.tag, client.user.displayAvatarURL())
    .setTitle('📚・Rules')
    .setDescription(`1° - No insults of any kind
2° - No pornographic, racist or sexist content of any kind
3° - No advertising without the consent of a senior team member. (also applies to private advertising)
4° - No fraud of any kind.
5° - server members are treated with respect
6° - Instructions from team members must be followed
7° - Private data will not be passed on without consent
8° - Provocation is prohibited
9° - Posing as another player is prohibited
10° - tagging is allowed but only if there is an important reason
11° - The general Discord rules must be observed!
12° - No second accounts! Except with permission!`)
    .setFooter('・' + message.author.tag, message.author.displayAvatarURL())
    .setTimestamp();
    message.channel.send(embed);
}
}