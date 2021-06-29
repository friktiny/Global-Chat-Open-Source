const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'stickers',
  description: 'Send stickers globally.',
  aliases: ['figurinhas'],
  usage: 'stickers',
  category: 'global',
  run: (client, message, args) => {
    let lang = db.get(`global-lang_${message.guild.id}`)
  let emo0 = client.emojis.cache.get("837324459698290698");
  let emo1 = client.emojis.cache.get("837324457516859411");
  let emo2 = client.emojis.cache.get("837324455348666428");
  let emo3 = client.emojis.cache.get("837324451875127307");
  let emo4 = client.emojis.cache.get("837324463905046528");
  let emo5 = client.emojis.cache.get("837324453284282410");
  let emo6 = client.emojis.cache.get("837324444824371250");
  let emo7 = client.emojis.cache.get("837324450189934694");
  let emo8 = client.emojis.cache.get("837324442626424913");
  let emo9 = client.emojis.cache.get("837324439262855208");
  let emo10 = client.emojis.cache.get("837324448684179487");
  let emo11 = client.emojis.cache.get("837324435761397781");
  let emo12 = client.emojis.cache.get("837324430345764885");
  let emo13 = client.emojis.cache.get("837324428589269023");
  let emo14 = client.emojis.cache.get("837324465540956221");
  let emo15 = client.emojis.cache.get("837324446972248094");
  let emo16 = client.emojis.cache.get("837324462264680450");
  var emoa = [emo0, emo1, emo2, emo3, emo4, emo5, emo6, emo7, emo8, emo9, emo10, emo11, emo12, emo13, emo14, emo15, emo15];
  let emoji = emoa[Math.floor(Math.random()*emoa.length)];
  let emoji2 = emoa[Math.floor(Math.random()*emoa.length)];
  let emoji3 = emoa[Math.floor(Math.random()*emoa.length)];
  let emoji4 = emoa[Math.floor(Math.random()*emoa.length)];
  let emoji5 = emoa[Math.floor(Math.random()*emoa.length)];
  
  let embed = new MessageEmbed()
  .setColor('#00ccff')
  .setAuthor('Stickers - Global Chat', client.user.displayAvatarURL({ dynamic: true }))
  .addFields({
    name: '1️⃣・emoji one',
    value: emoji
  },
  {
    name: '2️⃣・emoji two', 
    value: emoji2
  }, 
  {
    name: '3️⃣・emoji tree',
    value: emoji3
  }, 
  {
    name: '4️⃣・emoji four',
    value: emoji4
  },
  {
    name: '5️⃣・emoji five',
    value: emoji5
  });
  
  message.channel.send(embed).then(msg => {
    msg.react('🔄').then(r => {
      msg.react('1️⃣').then(r => {
        msg.react('2️⃣').then(r => {
          msg.react('3️⃣').then(r => {
            msg.react('4️⃣').then(r => {
              msg.react('5️⃣').then(r => {
                
              });
            });
          });
        });
      });
    });
  
    const randomFilter = (reaction, user) =>
			reaction.emoji.name === '🔄' && user.id === message.author.id;
			const oneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
			const twoFilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
			const treeFilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;
			const fourFilter = (reaction, user) => reaction.emoji.name === '4️⃣' && user.id === message.author.id;
			const fiveFilter = (reaction, user) => reaction.emoji.name === '5️⃣' && user.id === message.author.id;
			
			const random = msg.createReactionCollector(randomFilter);
			const one = msg.createReactionCollector(oneFilter);
			const two = msg.createReactionCollector(twoFilter);
			const tree = msg.createReactionCollector(treeFilter);
			const four = msg.createReactionCollector(fourFilter);
			const five = msg.createReactionCollector(fiveFilter);
			
			random.on('collect', r2 => {
			  msg.reactions.resolve('🔄').users.remove(message.author.id);
			  emoji = emoa[Math.floor(Math.random()*emoa.length)];
			  emoji2 = emoa[Math.floor(Math.random()*emoa.length)];
        emoji3 = emoa[Math.floor(Math.random()*emoa.length)];
        emoji4 = emoa[Math.floor(Math.random()*emoa.length)];
        emoji5 = emoa[Math.floor(Math.random()*emoa.length)];
        
			  embed.fields = [{
    name: '1️⃣・emoji ',
    value: emoji
},
{
    name: '2️⃣・emoji ',
    value: emoji2
},
{
    name: '3️⃣・emoji ',
    value: emoji3
},
{
    name: '4️⃣・emoji ',
    value: emoji4
},
{
    name: '5️⃣・emoji ',
    value: emoji5
}
];
			  
			  msg.edit(embed);
			});
			
			one.on('collect', r2 => {
			  msg.delete();
			  message.channel.send(`${emoji}**｜Sent in global chat.**`);
			  client.guilds.cache.forEach(guild=>{
			    let channel = guild.channels.cache.find(ch=>ch.topic === `${lang} - global on`);
			    if(!channel) return;
			  let id = db.get(`userid_${message.author.id}`);
			  
			  let embed = new MessageEmbed()
			  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#00ccff')
        .setAuthor('・' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(emoji)
        .setFooter('・Server: ' + message.guild.name + ' | User: ' + id, message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
        
        channel.send(embed);
		});
	 });
	 
	 two.on('collect', r2 => {
			  msg.delete();
			  message.channel.send(`${emoji2}**｜Sent in global chat.**`);
			  client.guilds.cache.forEach(guild=>{
			    let channel = guild.channels.cache.find(ch=>ch.topic === `${lang} - global on`);
			    if(!channel) return;
			  let id = db.get(`userid_${message.author.id}`);
			  
			  let embed = new MessageEmbed()
			  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#00ccff')
        .setAuthor('・' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(emoji2)
        .setFooter('・Server: ' + message.guild.name + ' | User: ' + id, message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
        
        channel.send(embed);
		});
	 });
	 
	 tree.on('collect', r2 => {
			  msg.delete();
			  message.channel.send(`${emoji3}**｜Sent in global chat.**`);
			  client.guilds.cache.forEach(guild=>{
			    let channel = guild.channels.cache.find(ch=>ch.topic === `${lang} - global on`);
			    if(!channel) return;
			  let id = db.get(`userid_${message.author.id}`);
			  
			  let embed = new MessageEmbed()
			  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#00ccff')
        .setAuthor('・' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(emoji3)
        .setFooter('・Server: ' + message.guild.name + ' | User: ' + id, message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
        
        channel.send(embed);
		});
	 });
	 
	 four.on('collect', r2 => {
			  msg.delete();
			  message.channel.send(`${emoji4}**｜Sent in global chat.**`);
			  client.guilds.cache.forEach(guild=>{
			    let channel = guild.channels.cache.find(ch=>ch.topic === `${lang} - global on`);
			    if(!channel) return;
			  let id = db.get(`userid_${message.author.id}`);
			  
			  let embed = new MessageEmbed()
			  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#00ccff')
        .setAuthor('・' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(emoji4)
        .setFooter('・Server: ' + message.guild.name + ' | User: ' + id, message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
        
        channel.send(embed);
		});
	 });
	 
	 five.on('collect', r2 => {
			  msg.delete();
			  message.channel.send(`${emoji5}**｜Sent in global chat.**`);
			  client.guilds.cache.forEach(guild=>{
			    let channel = guild.channels.cache.find(ch=>ch.topic === `${lang} - global on`);
			    if(!channel) return;
			  let id = db.get(`userid_${message.author.id}`);
			  
			  let embed = new MessageEmbed()
			  .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#00ccff')
        .setAuthor('・' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(emoji5)
        .setFooter('・Server: ' + message.guild.name + ' | User: ' + id, message.guild.iconURL({ dynamic: true }))
        .setTimestamp();
        
        channel.send(embed);
		});
	 });
  });
 }
};
