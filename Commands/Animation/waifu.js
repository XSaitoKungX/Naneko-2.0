const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'waifu',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function waifu() {
            const GIF = await neko.sfw.waifu();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Waifu-Bild`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            waifu();
    }
}