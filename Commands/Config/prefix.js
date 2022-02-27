const prefixModel = require("../../database/guildData/prefix");

module.exports = {
  name: "prefix",
  description: "Change the prefix per server!",
  userPerms: ["MANAGE_GUILD"],
  run: async (client, message, args) => {
  
    const data = await prefixModel.findOne({
      GuildID: message.guild.id,
    });

    if (!args[0])
      return message.channel.send("🚫 | Du musst ein **neues Prefix** angeben!");

    if (args[0].length > 5)
      return message.channel.send(
        "🚫 | Dein neuer Prefix muss weniger als 5 Zeichen lang sein!"
      );

    if (data) {
      await prefixModel.findOneAndRemove({
        GuildID: message.guild.id,
      });

      message.channel.send(`Das Prefix wurde jetzt geändert. Das neue Prefix ist --> **\`${args[0]}\`**`);

      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    } else if (!data) {
      message.channel.send(`Das Prefix wurde jetzt geändert. Das neue Prefix ist --> **\`${args[0]}\`**`);

      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    }
  },
};