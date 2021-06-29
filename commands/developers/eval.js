const discord = require('discord.js');
const db = require('quick.db');
module.exports = {
  name: 'eval', 
  description: 'Only for developers.',
  category: 'developers',
  usage: 'eval <cmd>',
  run: (client, message, args) => {
    if (!['711969991427227729', '632374998727917569'].includes(message.author.id)) {
   return message.channel.send(new Discord.MessageEmbed()
.setDescription(`**Ops apenas Meus Devs Podem Utilizar esse Comando!**`)
.setColor(`BLUE`));
    }
    
    let code = args.slice(0).join(" ");
    
    try {
      let ev = require("util").inspect(eval(code))
      if(ev.length > 1950) {
        ev = ev.subtr(0, 1950);        
      }
      
      let embed = new discord.MessageEmbed()
      .setColor("00FF00")
      .setDescription("📥 | Entrada:" + `\n\`\`\` ${code} \`\`\` \n` + "📤 | Saída: " + `\`\`\` ${ev} \`\`\` `);
      
      message.channel.send(embed);
    } catch(err) {
      let erro = new discord.MessageEmbed()
      .setColor('#00ccff')
      .setDescription("📥 | Entrada:" + `\n\`\`\` ${code} \`\`\` \n` + "📤 | Saída: " + `\`\`\` Eu detectei um erro: ${err} \`\`\``);
      
      message.channel.send(erro);
    }
  }
};