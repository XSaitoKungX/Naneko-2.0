const discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <reason>",
  userPerms: ["KICK_MEMBERS"],
  botPerms: ["EMBED_LINKS", "KICK_MEMBERS"],
  run: async (client, message, args) => {


    let target = message.mentions.members.first() || message.guild.users.cache.get(args[0]);

    if (!target) {
      return message.channel.send(
        `🚫 | **${message.author.username}**, bitte erwähne die Person, die du kicken möchtest!!`
      );
    }
    if (target.id === message.guild.ownerId) {
      return message.channel.send("🚫 | Du kannst der Server-Owner nicht kicken!!");
    }
    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, du kannst dich selbst nicht kicken!!`
      );
    }

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "-";

    const embed = new MessageEmbed()
      .setTitle("KICK MEMBER")
      .setColor("RANDOM")
      .setThumbnail(target.user.displayAvatarURL)
      .setDescription(
        `Action : Kick \nReason: ${reason} \nUser: ${target} \nModerator: ${message.member}`
      )
      .setTimestamp();

    message.channel.send({embeds: [embed]});

    target.kick(args[0]);
  },
};
