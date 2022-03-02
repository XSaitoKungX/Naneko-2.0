const Discord = module.require("discord.js");

module.exports = {
  name: "newvoice",
  description: "Create Voice Channels in your Server",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["EMBED_LINKS", "MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send("Bitte nenne den Namen für den VC!!");
    }
    message.guild.channels.create(args.slice(0).join(" "), { type: "voice" });

    const embed = new Discord.MessageEmbed()
      .setTitle("**Channel Updates**")
      .setDescription(`VC wurde erstellt!`)
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
  },
};
