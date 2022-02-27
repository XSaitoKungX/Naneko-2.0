const Discord = module.require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();


module.exports = {
  name: "hentaithigh",
  description: "Sends hentai thigh pictures.",
  run: async (client, message, args) => {
    var errMessage = "🚫 | NSFWs sind für diesen Channel nicht erlaubt!";
    if (!message.channel.nsfw) {
      message.react("💢");

      return message.reply(errMessage).then((msg) => {
        setTimeout(() => msg.delete(), 3000);
      });
    }

    const image = await nsfw.hentaithigh();
    const embed = new Discord.MessageEmbed()
    .setTitle(`Hentai thigh`)
    .setColor("GREEN")
    .setImage(image);
    message.channel.send({ embeds: [embed] });
  },
};
