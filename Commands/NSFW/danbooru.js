const randomPuppy = require('random-puppy');
const request = require('node-fetch');
const fs = require("fs")

const Discord = require('discord.js');
const booru = require('booru');

module.exports = {
  name: "danbooru",
  category: "NSFW",
  description: "Searches danbooru image board",
  botPerms: ["EMBED_LINKS"],
  run: async (bot, message, args, level) => {
    //command

    //Checks channel for nsfw
    var errMessage = "NSFWs sind für diesen Channel nicht erlaubt!";
    if (!message.channel.nsfw) {
      message.react("💢");

      return message.reply(errMessage).then((msg) => {
        setTimeout(() => msg.delete(), 3000);
      });
    }

    if (
      message.content.toUpperCase().includes("LOLI") ||
      message.content.toUpperCase().includes("GORE")
    )
      return message.channel.send(
        "🚫 | So etwas ist nicht erlaubt! Nicht einmal in NSFW-Kanälen!"
      );

    var query = message.content.split(/\s+/g).slice(1).join(" ");
    booru
      .search("db", [query], { random: true })
      .then(booru.commonfy)
      .then((images) => {
        for (let image of images) {
          const embed = new Discord.MessageEmbed()
            .setTitle("Danbooru:")
            .setImage(image.common.file_url)
            .setColor("#FF0000")
            .setFooter(`Tags: danbooru ${query}`)
            .setURL(image.common.file_url);
          return message.channel.send({ embeds: [embed] });
        }
      })
      .catch((err) => {
        if (err.name === "booruError") {
          return message.channel.send(`Keine Ergebnisse gefunden für **${query}**!`);
        } else {
          return message.channel.send(`Keine Ergebnisse gefunden für **${query}**!`);
        }
      });
  },
};