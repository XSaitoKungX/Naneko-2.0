const Discord = module.require("discord.js");

module.exports = {
  name: "esay",
  description: "Send Messages in embed form",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    let msg = args.join(" ");
    if (!msg) {
      return message.channel.send("🚫 | Bitte sag etwas!!");
    }
    const embed = new Discord.MessageEmbed()
      .setDescription(`${msg}`)
      .setColor("RANDOM");

    message.channel.send({ embeds: [embed] });
    message.delete();
  },
};
