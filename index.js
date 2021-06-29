const Discord = require('discord.js');
const express = require('express');
const app = express();

app.listen(process.env.PORT);

const db = require('quick.db');
const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const { prefix } = require("./config.json");
const SnakeGame = require('snakecord');

const color = '#00ccff';

const client = new Client({
    disableEveryone: true
});

// Collections
client.commands = new Collection();
client.aliases = new Collection();


// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setActivity("Use g-help to receive my command list.");
});

client.on("message", async message => {
    if(message.channel.type === 'dm') return;
    let blacklistuser = db.fetch(`blacklist_${message.author.id}`);
    if(blacklistuser === 'blacklist') return;
    if (message.author.bot) return;
    if (!message.guild) return;
    
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});

//menção
client.on('message', async message => {
  if(message.channel.type === 'dm') return;
    
  if([`<@${client.user.id}>`, `<@!${client.user.id}>`].includes(message.content)) {
    return message.channel.send(`Olá, meu prefixo neste servidor é \`${prefix}\`, use \`${prefix}help\` para receber minha lista de comandos!`);
  }
});

//global
client.on('message', message => {
  if(message.channel.type === 'dm') return;
  
  let topic = message.channel.topic;
  if(!topic) return;
  topic = topic.split(" ");
  let lang = topic[0]
  
  let id = db.get(`userid_${message.author.id}`)
  let id2 = Math.floor(Math.random()*90000000) + 10000000;
  if(id === null) {
    id = id2;
    db.set(`${id}`, message.author.id)
    db.set(`userid_${message.author.id}`, id)
  }
  
  let blacklistuser = db.fetch(`blacklist_${message.author.id}`);
    if(blacklistuser === 'blacklist') return;
    
    if(message.channel.topic === `${lang} - global on` && !message.author.bot){
      db.add(`messages_${message.author.id}`, 1)
      
      let lvl = db.get(`total_xp_${message.author.id}`);
        if(!lvl) lvl = 0;
        
      let limit = 150;
      if(lvl > 30000) limit = 500;
      
      if(message.content.length > limit) return message.channel.send(`**O Global Chat só permite \`${limit}\` caracteres.**`);
      if(message.content.startsWith("//")) return;
      
      client.guilds.cache.forEach(server=>{
        
        let msg = message.content;
        if(!msg) return;
        
        if(message.content.includes('@everyone')) msg = 'Message blocked.';
        if(message.content.includes('@here')) msg = 'Message blocked.';
        
        if(lvl <= 30000) {
        if(message.content.includes('https://')) msg = 'Message blocked.';
        if(message.content.includes('discord.gg')) msg = 'Message blocked.';
        if(message.content.includes('www')) msg = 'Massage blocked.';
        }
        if(server === message.guild) return;
        let channel = server.channels.cache.find(ch=>ch.topic === `${lang} - global on`);
        if(!channel) return;
        
     
        
        let img = message.attachments.first();
        if(!img) {
          img = ''
        } else {
          img = message.attachments.first().url;
        }
        
        let lvlcor = db.get(`level_color_${message.author.id}`);
        if(!lvlcor) lvlcor = '#303136';
        if(lvl >= 5000) lvlcor = 'BLUE'
        if(lvl >= 10000) lvlcor = 'GREEN'
        if(lvl >= 15000) lvlcor = 'YELLOW'
        if(lvl >= 20000) lvlcor = 'ORANGE'
        if(lvl >= 25000) lvlcor = 'RED'
        if(lvl >= 30000) lvlcor = 'PURPLE'
        
        
        let embed = new Discord.MessageEmbed()
        
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setAuthor('・' + message.author.tag + ' - ' + lvl + 'xp', message.author.displayAvatarURL({ dynamic: true }))
        .setColor(lvlcor)
        .setDescription(msg)
        .setImage(img)
        .setFooter('・Server: ' + message.guild.name + ` | User: ${id}`, (message.guild.iconURL({dynamic: true })))
        .setTimestamp();
        channel.send(embed).catch(err => {
          
        })
      });
    }
});
//global

//global warn
client.on('message', message => {
  if(message.channel.topic === 'CHANEL TOPIC FOR WARN' && !message.author.bot){
      client.guilds.cache.forEach(guild=>{
        let channel = guild.channels.cache.find(ch =>ch.topic === 'br - global on');
        if(!channel) return;
        let embed = new Discord.MessageEmbed()
        .setAuthor('・' + message.author.tag +" ", message.author.displayAvatarURL())
        .setColor("#FF0000")
        .setDescription(message.content)
        .setFooter('Global Warn.')
        .setTimestamp();
        channel.send(embed);
      });
    }
});

client.on('guildCreate', guild => {
  let blacklistuser = db.get(`blacklist_${guild.owner.id}`);
  if(blacklistuser === 'blacklist') {
      guild.leave();
  }
});

//LEVEL SYSTEM//
client.on("message", async (message, guild) => {
  if(message.channel.type === 'dm') return;
    
xp(message)
    if(message.content.startsWith(`${prefix}rank`)) {
    if(message.author.bot) return;
    var user = message.mentions.users.first() || message.author;
    var level = db.fetch(`lvl_${user.id}`) || 0;
    var currentxp = db.fetch(`xp_${user.id}`) || 0;
    var xpNeeded = level * 500 + 500 // 500 + 1000 + 1500
    const embedlvl = new Discord.MessageEmbed()
    .setColor('#00ccff')
    .setTitle(`${user.username}'s Level`)
    .setThumbnail(user.displayAvatarURL({dynamic: true}))
    .addFields(
        {name: `XP`, value: `${currentxp}/${xpNeeded}`, inline: true},
        {name: `Level`, value: `${level}`, inline: true}
    )
    message.channel.send(embedlvl)
    }

    function xp(message) {
        if(message.author.bot) return
        const randomNumber = Math.floor(Math.random() * 10) + 15;
        db.add(`total_xp_${message.author.id}`, randomNumber)
        db.add(`xp_${message.author.id}`, randomNumber) 
        db.add(`xptotal_${message.author.id}`, randomNumber)
        var level = db.get(`lvl_${message.author.id}`) || 1
        var xp = db.get(`xp_${message.author.id}`)
        var xpNeeded = level * 500;
        if(xpNeeded < xp){
            var newLevel = db.add(`lvl_${message.author.id}`, 1)
            db.subtract(`xp_${message.author.id}`, xpNeeded)
        }
    }
    

})

client.login(process.env.TOKEN)
