const Discord = module.require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();


module.exports = {
  name: "hentaiass",
  description: "Sends hentai ass pictures.",
  run: async (client, message, args) => {
    var errMessage = "NSFWs sind für diesen Channel nicht erlaubt!";
    if (!message.channel.nsfw) {
      message.react("💢");

      return message.reply(errMessage).then((msg) => {
        setTimeout(() => msg.delete(), 3000);
      });
    }

    const image = await nsfw.hentaiass();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Hentai Ass`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send({ embeds: [embed] });
  },
};
