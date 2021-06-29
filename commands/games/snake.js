const Discord = require('discord.js');
const SnakeGame = require('snakecord');

const snakeGame = new SnakeGame({
    title: 'Snake Game',
    color: "GREEN",
    timestamp: true,
    gameOverTitle: "Game Over"
});

module.exports = {
  name: 'snake',
  description: 'Play snake for Discord.',
  aliases: ['snakegame'],
  usage: '',
  category: 'games',
  run: (client, message, args) => {
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply(`Hello, this command could not be executed because I need \`ADMINISTRATOR\` permission.`);
    snakeGame.newGame(message);
}
};