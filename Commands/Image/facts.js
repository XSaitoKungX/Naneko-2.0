const Discord = module.require("discord.js");
const Jimp = require("jimp");
const cooldown = new Set();

module.exports = {
  name: "facts",
  description: "Another Fun Command",
  botPerms: ["ATTTACH_FILES"],
  enabled: false,
  run: async (client, message, args) => {
    if (message.channel.type === "dm") return;
    let text = args.join(" ");
    if (!text) {
      return message.reply("🚫 | Du musst einen Text angeben!");
    }
    const link = await client.images.image.facts({ text: text })
    message.channel.send({
      files: [
        {
          attachment: link
        },
      ],
    });
  },
};