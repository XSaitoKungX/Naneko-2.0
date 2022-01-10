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
      return message.channel.send("🚫 | Sie müssen ein **Neues Prefix** angeben!");

    if (args[0].length > 5)
      return message.channel.send(
        "🚫 | Ihr neues Prefix darf maximal nur aus `5` Zeichen bestehen!"
      );

    if (data) {
      await prefixModel.findOneAndRemove({
        GuildID: message.guild.id,
      });

      message.channel.send(`Ich habe jetzt neues Prefix eingestellt. Das neue Prefix ist: **\`${args[0]}\`**`);

      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    } else if (!data) {
      message.channel.send(`Ich habe jetzt neues Prefix eingestellt. Das neue Prefix ist: **\`${args[0]}\`**`);

      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id,
      });
      newData.save();
    }
  },
};