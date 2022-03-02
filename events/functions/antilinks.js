const antilinkData = require("../../database/guildData/antilink");
const ms = require('ms')

module.exports = async (message) => {
  const antilink = await antilinkData.findOne({
    GuildID: message.guild.id,
  });
  if (antilink) {
    if (
      message.content.match("https://") ||
      message.content.match("discord.gg") ||
      message.content.match("www.")
    ) {
      message.delete();
      let msg = message.channel.send("🚫 | Links sind hier nicht erlaubt, da Antilink auf diesem Server aktiv ist!").then((msg) => {
          let time = "5s";
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        });
    }
  }
};
