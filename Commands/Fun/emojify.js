const discord = require("discord.js");
const mapping = {
  " ": "   ",
  0: ":zero:",
  1: ":one:",
  2: ":two:",
  3: ":three:",
  4: ":four:",
  5: ":five:",
  6: ":six:",
  7: ":seven:",
  8: ":eight:",
  9: ":nine:",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:",
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach((c) => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

module.exports = {
  name: "emojify",
  aliases: [],
  category: "Fun",
  usage: "emojify <text>",
  description: "Gibt bereitgestellten Text in Emojify-Form (Emotes) zurück.",
  botPerms: ["MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    if (args.length < 1) {
      message.channel.send("🚫 | Sie müssen einen Text zum Emojifizieren angeben!");
    }
    message.delete();
    message.channel.send(
      args
        .join(" ")
        .split("")
        .map((c) => mapping[c] || c)
        .join("")
    );
  },
};
