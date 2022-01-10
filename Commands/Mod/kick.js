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
        `**${message.author.username}**, Bitte erwähnen Sie die Person, die Sie kicken möchten!!`
      );
    }
    if (target.id === message.guild.ownerId) {
      return message.channel.send("🚫 | Sie können der Server-Owner nicht kicken!!");
    }
    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, Sie können sich selbst nicht kicken!!`
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
