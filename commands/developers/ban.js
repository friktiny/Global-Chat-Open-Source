const Discord = require('discord.js');
const ms = require('ms')
const db = require('quick.db');

module.exports = {
  name: 'ban',
  run: (client, message, args) => {
  if(!['843110596139286538'].includes(message.channel.id)) {
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Ops apenas Meus Devs Podem Utilizar esse Comando!**`)
.setColor(`BLUE`));
    }
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) return message.channel.send('Mencione um usuário para banir.');
  let motivo = args.slice(1).join(" ");
  if(!motivo) motivo = "Não Definido";
  db.set(`blacklist_${user.id}`, 'blacklist');
  db.set(`blackmot_${user.id}`, motivo)
  
  message.channel.send(`${user.tag} foi banido.`);
  user.send(`Você foi Banido!\nMotivo: ${motivo}\nSe isto é um erro comunique a equipe de suporte! ( https://discord.gg/8X5EDDz9wz )`);
  setTimeout(() => {
   db.set(`blacklist_${user.id}`, null);
   db.set(`blackmot_${user.id}`, null);
   
   message.channel.send(`${user.tag} foi desbanido.`);
   user.send(`Você foi desbanido. Siga as regras agora.`);
  }, 2520000);
 }
};
