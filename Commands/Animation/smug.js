const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'smug',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function smug() {
            const GIF = await neko.sfw.smug();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges selbstgefälliges Bild / GIF`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            smug();
    }
}