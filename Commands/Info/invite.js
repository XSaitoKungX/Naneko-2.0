const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Hol dir Nanekos Einladungslink [hier](https://dsc.gg/naneko)**\n**Benötigst du Hilfe? Dann tritt jetzt unserem [Support-Server](https://dsc.gg/infinity-support) bei!**"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
