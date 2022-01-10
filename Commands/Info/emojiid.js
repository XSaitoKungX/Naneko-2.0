const Discord = module.require("discord.js");

module.exports = {
  name: "emojiid",
  description: "Get ID of emojis",
  run: async (client, message, args) => {
    const name = args.join(" ");
    const emoji = message.guild.emojis.cache.find((r) => r.name === name);
    if (!name) {
      return message.channel.send("Please type the emoji name");
    }
    if (!emoji) {
      return message.channel.send(
        "🚫 | Die Emojis mit dem angegebenen Namen konnten nicht gefunden werden. Bitte vergewissern Sie sich, dass der Emoji-Name korrekt ist"
      );
    }
    new message.channel.send(`\`\`\`${emoji}\`\`\``);
  },
};
