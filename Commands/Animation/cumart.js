const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cumart',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function cumart() {
            const GIF = await neko.nsfw.cumArts();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Cumart-Bild / GIF`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            cumart();
    }
}