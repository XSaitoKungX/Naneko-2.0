const Discord = module.require("discord.js");
const urban = require("urban");

module.exports = {
  name: "urban",
  description: "Find meanings from the urban dictionary",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    if (!message.channel.nsfw) {
      return message.channel.send(
        "🚫 | Dieser Befehl kann nur in einem NSFW-Kanal verwendet werden!"
      );
    }
    let str = args.join("");
    if (!str) {
      return message.channel.send("🚫 | Bitte geben Sie ein Wort ein!!");
    }
    if (args.length > 0) {
      urban(str).first((json) => {
        if (!json) return message.channel.send("Keine Ergebnisse gefunden!");

        let embed = new Discord.MessageEmbed()
          .setTitle(json.word)
          .setColor("3498db")
          .setDescription(json.definition || "Keine Definition!")
          .addField("Upvotes", json.thumbs_up, true)
          .addField("Downvotes", json.thumbs_down, true)
          .setFooter("Source: Urban Dictionary, Author: " + json.author);

        message.channel.send({ embeds: [embed] });
      });
    }
  },
};
