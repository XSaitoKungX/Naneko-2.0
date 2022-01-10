const prefixModel = require("../../database/guildData/welcome");

module.exports = {
  name: "joinchannel",
  description: "Change the welcome channel per server!",
  aliases: ["jchannel", "welcome"],
  userPerms: ["MANAGE_CHANNELS"],
  botPerms: ["MANAGE_CHANNELS"],
  run: async (client, message, args) => {
    if (!args[0]) {
      return message.channel.send(`\`Usage: n.joinchannel <#channel|off>\``);
    }
    if (message.mentions.channels.first()) {
      const data = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(
          `Ich habe Join-Channel jetzt auf --> ${message.mentions.channels.first()} eingestellt.`
        );

        let newData = new prefixModel({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send(
          `Ich habe Join-Channel jetzt auf --> ${message.mentions.channels.first()} eingestellt.`
        );

        let newData = new prefixModel({
          Welcome: message.mentions.channels.first().id,
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "off") {
      const data2 = await prefixModel.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await prefixModel.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`Join-Channel wurde erfolgreich deaktiviert!`);
      } else if (!data2) {
        return message.channel.send(`🚫 | Join-Channel wurde noch nicht eingerichtet! Bitte richten Sie zuerst einen Join-Channel ein und dann versuchen Sie es nochmal :)`);
      }
    }
  },
};
