const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "feetgif",
  category: "NSFW",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

  //Checks channel for nsfw
  var errMessage = "🚫 | NSFWs sind für diesen Channel nicht erlaubt!";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })

  }

  if (!message.guild) return;
  async function feetgif() {
      const GIF = await neko.nsfw.feetGif();
      const embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`**${message.author.username}**, hier ist ein zufälliges Fuß-Gif`)
      .setImage(GIF.url)
      message.channel.send({ embeds: [embed] });
  }

      feetgif();

}
};
