const Discord = module.require("discord.js");

module.exports = {
  name: "softban",
  description: "Soft Ban a User",
  userPerms: ["BAN_MEMBERS"],
  botPerms: ["EMBED_LINKS", "BAN_MEMBERS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    message.delete();

    let banMember =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!banMember)
      return message.channel.send("🚫 | Meister, bitte geben Sie einen Benutzer zum Bannen an!");
    if (banMember.id === message.guild.owner.id)
      return message.channel.send("🚫 | Sie können der Server-Owner nicht bannen!");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Grund nicht angegeben!";

    banMember
      .send({
        embed: {
          color: "#ff0019",
          description: `Hallo, Sie wurden von ${message.guild.name} gebannt, weil Sie gegen die Serverregeln verstößt haben!`,
        },
      })
      .then(() =>
        message.guild
          .member(banMember)
          .ban(banMember, { days: 1, reason: reason })
      )
      .then(() =>
        message.guild.members
          .unban(banMember.id)
          .catch((err) => console.log(err))
      );

    let embed = new Discord.MessageEmbed()
      .setThumbnail(banMember.user.displayAvatarURL())
      .setColor("RANDOM")
      .addField("Moderation:", "SOFT BAN")
      .addField("Banned:", banMember.user.username)
      .addField("Moderator:", message.author.username)
      .addField("Reason:", reason)
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
