const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'gecg',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function gecg() {
            const GIF = await neko.sfw.gecg();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges gentechnisch verändertes Catgirl-Bild`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            gecg();
    }
}