const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'hentaigif',
    run: async (client, message, args) => {
        var errMessage = "🚫 | NSFWs sind für diesen Channel nicht erlaubt!";
        if (!message.channel.nsfw) {
            message.react("💢");
      
            return message.reply(errMessage).then((msg) => {
            setTimeout(() => msg.delete(), 3000);
            });
        }
        
        if (!message.guild) return;
            async function hentaigif() {
            const GIF = await neko.nsfw.randomHentaiGif();
            const embed = new Discord.MessageEmbed()
            .setColor('RADNOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Hentai-GIF`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            hentaigif();
    }
}