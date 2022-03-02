const discord = module.require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  userPerms: ["BAN_MEMBERS"],
  botPerms: ["EMBED_LINKS", "BAN_MEMBERS"],
  run: async (client, message, args) => {
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Unspecified";

    const target = message.mentions.members.first() || message.guild.users.cache.get(args[0]);

    if (!target) {
      return message.channel.send(
        `🚫 | **${message.author.username}**, Bitte erwähne die Person, die du bannen möchtest!!`
      );
    }

    if (target.id === message.author.id) {
      return message.channel.send(
        `🚫 | **${message.author.username}**, du kannst dich selbst nicht bannen!`
      );
    }
    if (target.id === message.guild.ownerId) {
      return message.channel.send("🚫 | Du kannst der Server-Owner nicht bannen!");
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action : Ban")
      .setDescription(`Banned ${target} (${target.id})\nReason: ${reason}`)
      .setColor("RANDOM")
      .setThumbnail(target.avatarURL)
      .setFooter(`Gabannt von: ${message.author.tag}`);

    await message.guild.bans.create(target, {
      reason: reason
    }).then(() => {
        message.channel.send({ embeds: [embed] });
      });
  },
};
