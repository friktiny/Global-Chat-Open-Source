const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: 'userid',
  description: `A user's information by Alternate ID.`,
  aliases: ['usi', 'ui'],
  usage: '<alternateID>',
  category: 'info',
  run: (client, message, args) => {
    let mensagem = args[0];
    let id = db.get(`${mensagem}`)
    let user = client.users.cache.get(`${id}`);
    if(!user) return message.reply('User not found.')
    
    message.channel.send(`${user.username} (\`${id}\`)`);
}
};