const Discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: 'unban',
  run: (client, message, args) => {
if(!['843110596139286538'].includes(message.channel.id)) {
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Ops apenas Meus Devs Podem Utilizar esse Comando!**`)
.setColor(`BLUE`));
    }     
    
  let user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) return message.channel.send('Mencione um usuário para desbanir.');
  let nota = args.slice(1).join(" ");
  if(!nota) nota = "Não Definido";
  db.set(`blacklist_${user.id}`, null);
  
  message.channel.send(`${user.username} foi desbanido.`);
  user.send(`Você foi desbanido do Global Chat!\nNota: ${nota}`);
}
};