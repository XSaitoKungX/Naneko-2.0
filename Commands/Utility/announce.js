const Discord = require("discord.js");

module.exports = {
  name: "announce",
  description: "Make an Announcemnet in your Server",
  userPerms: ["MANAGE_MESSAGES"],
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    const anchannel = message.mentions.channels.first();
    if (!anchannel) {
      return message.channel.send("`Usage: n.announce <channel> <msg>`");
    }
    if (!args.slice(1).join(" ")) {
      return message.channel.send(
        "🚫 | Bitte fügen Sie etwas Text hinzu, um eine Ankündigung zu machen."
      );
    }

    let embed = new Discord.MessageEmbed()
      .setTitle(`📢 | **Neue Server Ankündigung!**`)
      .setDescription(args.slice(1).join(" "), {
        allowedMentions: { parse: ["users"] },
      })
      .setColor("RANDOM")
      .setFooter(`Ankündigung von ${message.author.username}`);
    anchannel.send({ embeds: [embed] });

    let anembed = new Discord.MessageEmbed()
      .setTitle("Done!")
      .setDescription(`Die Ankündigung wurde gesendet an --> ${anchannel}`)
      .setColor("RANDOM");

    message.channel.send({ embeds: [anembed] });
    message.delete();
  },
};
