const Discord = module.require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "serverinfo",
  category: "utility",
  description: "Shows info about a server",
  usage: "n.serverinfo",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    //command
    const mention = message.member;
    const afk =
      message.guild.afkChannel === null ? "`None`" : message.guild.afkChannel;
    let servericon = message.guild.iconURL;
    let verifLevels = {
      NONE: "None",
      LOW: "Low",
      MEDIUM: "Medium",
      HIGH: "(╯°□°）╯︵  ┻━┻ (High)",
      VERY_HIGH: "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Very High)",
    };
    let region = {
      brazil: "Brazil",
      "eu-central": "Central Europe",
      singapore: "Singapore",
      "us-central": "U.S. Central",
      sydney: "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      london: "London",
      amsterdam: "Amsterdam",
      hongkong: "Hong Kong",
      russia: "Russia",
      southafrica: "South Africa",
      india: "India",
    };
    const serverembed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .setThumbnail(servericon)
      .addField(
        `Allgemeine Information`,
        `Owner: ${message.guild.owner} \nRegion: \`${
          region[message.guild.region]
        }\` \nVerifizierungslevel: \`${
          verifLevels[message.guild.verificationLevel]
        }\``
      )
      .addField(
        `Überblick`,
        `Total Channels: \`${
          message.guild.channels.cache.size
        }\` \nText Channels: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_TEXT").size
        }\` \nVoice Channels: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_VOICE").size
        }\` \nAFK Channel: ${afk} \nAFK Timeout: \`${
          message.guild.afkTimeout
        } sec\` \nTotal Roles: \`${
          message.guild.roles.cache.size
        }\` \nTotal Emojis: \`${message.guild.emojis.cache.size}\``
      )
      .addField(
        `Member Info`,
        `Total Members: \`${message.guild.memberCount}\` \nHumans: \`${
          message.guild.members.cache.filter((member) => !member.user.bot).size
        }\` \nBots: \`${
          message.guild.members.cache.filter((member) => member.user.bot).size
        }\``
      )
      .addField(
        `Misc. Info`,
        `Du bist den Server beigetreten am: \n\`${moment(mention.joinedAt).format(
          "dddd, MMMM Do YYYY, h:mm:ss A"
        )}\` \nErstellt am: \n\`${moment(message.guild.createdAt).format(
          "dddd, MMMM Do YYYY, h:mm:ss A"
        )}\``
      )
      .setThumbnail(message.guild.iconURL())
      .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL())
      .setColor("RANDOM")
      .setTimestamp();

    message.channel.send({ embeds: [serverembed] });
  },
};
