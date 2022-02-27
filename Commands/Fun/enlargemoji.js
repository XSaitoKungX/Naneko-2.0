const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `#ffffff`;

module.exports = {
  name: "enlargemoji",
  category: "fun",
  description: "Converting Server emoji to PNG/GIF!",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const authoravatar = message.author.avatarURL();
    const emoji = args[0];
    if (!emoji) return message.channel.send(`Bitte gib mir ein Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;

      const Added = new MessageEmbed()
        .setAuthor(`Enlarged Emoji`, authoravatar)
        .setColor(`${Color}`)
        .setDescription(`\`${customemoji.name}\` \`${customemoji.id}\``)
        .setImage(Link);
      return message.channel.send({ embeds: [Added] });
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Bitte gib mir ein gültiges Emoji!`);
      message.channel.send(
        `Du kannst normale Emoji verwenden, ohne auf den Server hinzuzufügen!`
      );
    }
  },
};
