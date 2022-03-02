const Discord = require("discord.js");

module.exports = {
  name: "removerole",
  description: "Take roles from users",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["MANAGE_ROLES"],
  run: async (client, message, args) => {
   
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "🚫 | Bitte erwähne einen Benutzer, von dem du die Rolle wegnehmen möchtest!"
      );
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("🚫 | Bitte erwähne eine Rolle!!");
    await user.roles.remove(role),
      message.channel.send(
        `✅ | ${user}, ${role} Rolle wurde erfolgreich weggenommen!`
      );
  },
};
