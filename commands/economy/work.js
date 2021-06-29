const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')
const color = '#00ccff'

module.exports = {
  name: 'work',
  description: 'Get your work. (works: prostitute, constructor and programmer)',
  aliases: ['wk'],
  usage: '<work>',
  category: 'economy',
  run: async (client, message, args) => {
    
    let timeout = 864000 // 24 hours in milliseconds, change if you'd like.


    let work = db.fetch(`work_${message.author.id}`);

    if (work !== null && timeout - (Date.now() - work) > 0) {
        let time = ms(timeout - (Date.now() - work));
        
        message.channel.send(`You've worked hard, wait **${time.minutes}m ${time.seconds}s** to vote to work!`)
    } else {
    
    if(args[0] === 'prostitute') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a prostitute & got payed ${amount} GCoins for having sex! :D`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'constructor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount} GCoins for rebuilding the empire state building.`)
        .setColor(color)
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'programmer') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount} GCoins!`)
        .setColor(color)
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
        db.set(`work_${message.author.id}`, Date.now())
     }
    }
  }
}