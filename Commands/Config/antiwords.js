const Discord = require("discord.js")
const antiwordsSchema = require("../../database/guildData/antiwords");

module.exports = {
  name: "antiwords",
  aliases: ["antiword", "anwos"],
  userPerms: ["ADMINISTRATOR"],
  description: "Setup antilink per server!",
  run: async(client, message, args) => {
    if (!args[0]) {
      return message.channel.send(`Usage: \`(prefix)antiwords <on|off>\``)
    }
    if (args[0] === "On" || args[0] === "on") {
      const data = await antiwordsSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data) {
        await antiwordsSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        message.channel.send(`**✅ | Antiwords ist jezt aktiviert!**`);

        let newData = new antiwordsSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      } else if (!data) {
        message.channel.send(`**✅ | Antiwords ist jezt aktiviert!**`);

        let newData = new antiwordsSchema({
          GuildID: message.guild.id,
        });
        newData.save();
      }
    } else if (args[0] === "Off" || args[0] === "off") {
      const data2 = await antiwordsSchema.findOne({
        GuildID: message.guild.id,
      });

      if (data2) {
        await antiwordsSchema.findOneAndRemove({
          GuildID: message.guild.id,
        });

        return message.channel.send(`**✅ | Antiwords ist erfolgreich deaktiviert!**`);

      } else if (!data2) {
        return message.channel.send(`**🚫 | Antiwords ist noch nicht eingestellt. Bitte versuche es später nochmal!**`);
      }
    }
  }
}
