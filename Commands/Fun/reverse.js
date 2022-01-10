const Discord = module.require("discord.js");

module.exports = {
  name: "reverse",
  description: "Reverse the text entered",
  run: async (client, message, args) => {
    let str = args.join(" ");
    if (!str) {
      return message.channel.send("🚫 | Bitte geben Sie einen Text ein, der rückgängig gemacht werden soll!");
    }
    message.channel.send(str.split("").reverse().join(""));
  },
};
