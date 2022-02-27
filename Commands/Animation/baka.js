const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'baka',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function baka() {
            const GIF = await neko.sfw.baka();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Baka-Bild / GIF`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            baka();
    }
}