const { Message } = require("discord.js");

const Discord = module.require("discord.js");

module.exports = {
  name: "changemymind",
  description: "Image Manipulation Command",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const text = args.join("+");
    if (!text) {
      return message.channel.send("🚫 | Gib einen Text ein!");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://vacefron.nl/api/changemymind?text=${text}`,
          name: "changemymind.png",
        },
      ],
    });
  },
};