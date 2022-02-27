module.exports = {
  name: "say",
  description: "Make the bot say your message",
  botPerms: ["MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    if (!args.join(" ")) {
      message.channel.send("🚫 | Bitte füge etwas Text hinzu, damit ich es wiederholen kann!!");
    }
    message.channel.send(args.join(" "), {
      allowedMentions: { parse: ["users"] },
    });
    message.delete();
  },
};
