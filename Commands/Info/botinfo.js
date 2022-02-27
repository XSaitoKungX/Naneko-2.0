/**
* READ THIS BEFORE YOU CHANGE THE CONTENT OF THIS COMMAND!
* You are not allowed to change lines about this repo in this command.
* You can change bot name and owner name, but not the source of this bot.
* You are also not allowed to remove the credits from the footer to the orginal owner from this bot.
* If you want to change the description, you will have to add the line that: "[YOUR BOT NAME] is an modified instance of Naneko-2.0 bot made by Simpleboy353.
* These points are not optional, but remarks from the dev team of Naneko-2.0.
*/

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setAuthor("Naneko-,2.0's Info", client.user.avatarURL())
      .setColor("RANDOM")
      .setDescription(
        `**Bot Name: **Naneko \n**Owner: **꧁Saito꧂#6248 \n**Total Categories: **8 \n**Total Commands: **${client.commands.size} \n**Users:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        }`
      )
      .addField(
        "💎 Über Naneko-2.0",
        "Naneko-2.0 ist ein Open-Source-Mehrzweck-Discord-Bot mit Funktionen wie Moderation, Musik, Protokollierung, Willkommen und vielem mehr!\nDu findest den Link zum [GitHub Repo hier](https://github.com/XSaitoKungX/Naneko-2.0)"
      )
      .addField(
        "💎 Einige nützliche Links",
        "**Hole deinen eigenen Bot!** **[Hier](https://github.com/XSaitoKungX/Naneko-2.0)** \n**Benötigst du Hilfe? Dann tritt unserem** **[Support/Development Server](https://dsc.gg/infinity-support)** **für Unterstützung** bei!"
      )
      .setFooter("Viele Grüße, Naneko-2.0-Entwicklungsteam");
    message.channel.send({ embeds: [embed] });
  },
};
