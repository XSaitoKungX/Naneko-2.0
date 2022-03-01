const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'neko',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function nekof() {
            const GIF = await neko.sfw.neko();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Neko-Bild`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            nekof();
    }
}