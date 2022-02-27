const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pussyart',
    run: async (client, message, args) => {
        var errMessage = "🚫 | NSFWs sind für diesen Channel nicht erlaubt!";
            if (!message.channel.nsfw) {
            message.react("💢");
        
            return message.reply(errMessage).then((msg) => {
            setTimeout(() => msg.delete(), 3000);
            });
          }

            if (!message.guild) return;
                async function pussyart() {
                const GIF = await neko.sfw.pussyart();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`**${message.author.username}**, hier ist ein zufälliges Pussyart-Bild/GIF`)
                .setImage(GIF.url)
                message.channel.send({ embeds: [embed] });
                }
                pussyart();
    }
}