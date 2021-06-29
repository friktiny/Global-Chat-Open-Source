const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const color = '#00ccff'

module.exports = {
  name: 'userinfo',
  description: `See a user's information.`,
  aliases: ['us', 'infouser'],
  usage: '@user/userID',
  category: 'info',
  run: async (client, message, args) => {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "online";
                break;
            case "dnd":
                status = "AFK";
                break;
            case "idle":
                status = "Nap";
                break;
            case "offline":
                status = "offline";
                break;
        }
        let role = user.roles.cache.map(role => role.name.toString()).join(", ")
        let messages = db.get(`messages_${user.id}`);
        if(!messages) messages = '0';
        
        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} Info`)
            .setColor(color)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Nick: ",
                    value: user.user.username,
                },
                {
                    name: "#️Hashtag: ",
                    value: `#${user.user.discriminator}`,
                },
                {
                    name: "ID: ",
                    value: user.user.id,
                },
                {
                    name: "Alternate ID: ",
                    value: db.get(`userid_${user.user.id}`)
                },
                {
                  name: "Total messages",
                  value: messages
                }, 
                {
                    name: "Status: ",
                    value: status,
                },
                {
                    name: "Activity: ",
                    value: user.presence.activities[0] ? user.presence.activities[0].name : `The user is not doing anything.`,
                },
                {
                    name: 'Avatar : ',
                    value: `[Click here!](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Account created in: ',
                    value: user.user.createdAt.toLocaleDateString("pt-BR"),
                },
                {
                    name: 'It went into: ',
                    value: user.joinedAt.toLocaleDateString("pt-BR"),
                },
                {
                    name: 'Positions: ',
                    value: role.replace("@everyone", "`@everyone`"),
                }
            )

        await message.channel.send(embed)
    }
}