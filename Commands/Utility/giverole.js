const Discord = require("discord.js");

module.exports = {
  name: "giverole",
  description: "Give roles to users",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "🚫 | Bitte erwähnen Sie einen Benutzer, dem Sie die Rolle geben möchten!!"
      );
    const name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Bitte geben Sie den Namen der Rolle ein!");
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("Die bereitgestellte Rolle konnte nicht gefunden werden!");
    await user.roles.add(role),
      message.channel.send(`${user} hat jetzt die ${role} Rolle bekommen! Congrats!! :tada:`);
  },
};
