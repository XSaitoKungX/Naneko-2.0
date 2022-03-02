const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
  name: "pussy",
  category: "NSFW",
  description: "Sends pussy pics",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    try {
      //command
      var errMessage = "🚫 | NSFWs sind für diesen Channel nicht erlaubt!";
      if (!message.channel.nsfw) {
        message.react("💢");

        return message.reply(errMessage).then((msg) => {
          setTimeout(() => msg.delete(), 3000);
        });
      }
      if (!message.guild) return;
          async function pussy() {
          const GIF = await neko.nsfw.pussy();
          const embed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setTitle(`**${message.author.username}**, hier ist ein zufälliges Pussy-Bild/GIF`)
          .setImage(GIF.url)
          message.channel.send({ embeds: [embed] })
          .catch(console.error)}
          pussy();
    } catch (err) {
      const errorlogs = client.channels.cache.get("912404023280304148");

      message.channel.send(
        `⚠ | Hoppla, wir haben gerade einen Fehler! Dieser Fehler wurde dem Support Center gemeldet!`
      );

      errorlogs.send(
        `Error in ${message.guild.name} by ${message.author.username} on pussy commands!\n\nError:\n\n ${err}`
      );
    }
  },
};
