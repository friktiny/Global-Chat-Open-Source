const Discord = require('discord.js');
const ms = require('ms')
const db = require('quick.db');
module.exports = {
  name: 'permban',
  run: (client, message, args) => {
  if(!['711969991427227729'].includes(message.author.id)) {
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Ops apenas Meus Devs Podem Utilizar esse Comando!**`)
.setColor(`BLUE`));
    }
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) return message.channel.send('Mencione um usuário para banir.');
  let motivo = args.slice(1).join(" ");
  if(!motivo) motivo = "Não Definido";
  db.set(`blacklist_${user.id}`, 'blacklist');
  db.set(`blackmot_${user.id}`, motivo);
  
  message.channel.send(`${user.tag} foi banido.`);
 }
};