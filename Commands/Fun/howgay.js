const Discord = module.require("discord.js");

module.exports = {
  name: "howgay",
  description: "Just for fun command",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let target = message.mentions.members
      ? message.mentions.members.first()
      : message.author;

    let rng = Math.floor(Math.random() * 101);

    const howgayembed = new Discord.MessageEmbed()
      .setTitle(`Rechner für schwule Maschinen`)
      .setDescription(`${target.username} is ` + rng + "% Gay🌈")
      .setColor("PINK");

    message.channel.send({ embeds: [howgayembed] });
  },
};
