const Discord = module.require("discord.js");

module.exports = {
  name: "reverse",
  description: "Reverse the text entered",
  run: async (client, message, args) => {
    let str = args.join(" ");
    if (!str) {
      return message.channel.send("Gib einen Text ein, der umgekehrt werden soll!");
    }
    message.channel.send(str.split("").reverse().join(""));
  },
};
