const Discord = module.require("discord.js");

module.exports = {
  name: "userid",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    var mention = message.guild.member(message.mentions.users.first());
    if (!mention) return message.channel.send("🚫 | Sie müssen jemanden erwähnen, um deren ID zu bekommen!!");
    const lolicon = mention.user.avatarURL;
    const lolid = new Discord.MessageEmbed()
      .setThumbnail(mention.user.avatarURL)
      .setColor("RANDOM")
      .setTitle("Here ist " + `${mention.user.username}\'s ID`)
      .setDescription(`${mention.id}`)
      .setThumbnail(lolicon);
    message.channel.send({ embeds: [lolid] });
  },
};
