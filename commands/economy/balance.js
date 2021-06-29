const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'balance',
  description: 'Look how much money you have.',
  aliases: ['bal', 'atm'],
  usage: '',
  category: 'economy',
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let bal = db.fetch(`money_${user.id}`)

    if (bal === null) bal = 0;
     message.channel.send('<@' + user + '> has ' + bal + ' GCoins')


 }
}
