const Discord = module.require("discord.js");

module.exports = {
  name: "delchannel",
  description: "Delete Channels From your Server",
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["EMBED_LINKS", "MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    const fetchedChannel = message.mentions.channels.first();
    if (!fetchedChannel) {
      return message.channel.send("`Usage: n.delchannel <channel>`");
    }
    fetchedChannel.delete();

    const embed = new Discord.MessageEmbed()
      .setTitle("**Channel Updates**")
      .setDescription("Kanal wurde gelöscht!")
      .setColor("RANDOM");

    await message.channel.send({ embeds: [embed] });
  },
};
