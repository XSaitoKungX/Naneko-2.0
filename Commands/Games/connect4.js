const Discord = module.require("discord.js");
const { Connect4 } = require('discord-gamecord')

module.exports = {
  name: "connect4",
  description: "connect4 in discord!",
  run: async (client, message, args) => {
          new Connect4({
        message: message,
        opponent: message.mentions.users.first(),
        embed: {
          title: 'Connect 4',
          color: '#5865F2',
        },
        emojis: {
          player1: '🔵',
          player2: '🟡'
        },
        turnMessage: '{emoji} | Jetzt ist **{player}** an der Reihe!',
        winMessage: '{emoji} | **{winner}** hat das Spiel gewonnen!',
        gameEndMessage: 'Das Spiel blieb unvollendet :(',
        drawMessage: 'Es war ein Unentschieden!',
        askMessage: 'Hey {opponent}, {challenger} hat dich zu einer Partie Connect 4 herausgefordert!',
        cancelMessage: 'Sieht so aus, als hättest du dich geweigert, Connect4 zu spielen. \:(',
        timeEndMessage: 'Da der Gegner nicht geantwortet hat, habe ich das Spiel abgebrochen!',
      }).startGame();
  },
};
