const Discord = module.require("discord.js");
const Jimp = require("jimp");
const cooldown = new Set();

module.exports = {
  name: "illegal",
  description: "Provide a text to Trump for making it illegal",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    if (cooldown.has(message.author.id)) {
      let cooldownemb = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username} Cooldown..`,
          message.author.displayAvatarURL
        )
        .setDescription(`🚫 | Sie müssen 10s warten, bis Sie wieder diesen Command benutzen können!!`)
        .setColor(`RED`)
        .setFooter(`Diese Nachricht wird in 10 Sekunden gelöscht..`);
      return message.channel.send(cooldownemb).then((message) => {
        setTimeout(() => message.delete(), 10000);
      });
    }
    cooldown.add(message.author.id);

    setTimeout(() => {
      cooldown.delete(message.author.id);
    }, 10000);

    if (message.channel.type === "dm") return;
    let meow = message.content.split(" ").slice(1);
    let args1 = meow.join(" ");
    let illegal =
      `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/` +
      args1.toUpperCase() +
      `.gif`;
    if (!args1) {
      return message.reply(
        "Sie müssen einen Text angeben, um es illegal zu machen"
      );
    }
    if (meow.length > 1) {
      return message.reply("Es kann immer nur eines illegal gemacht werden");
    }
    const emb = new Discord.MessageEmbed();
    emb.setAuthor(
      "Trump hat jetzt " + meow + " gemacht: " + " Illegal!",
      "http://blog.adsy.me/wp-content/uploads/2016/11/angry-side-face-trump-transparent.png"
    );
    emb.setImage(illegal);
    message.channel.send({
      embed: emb,
    });
  },
};