const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'randomavatar',
    aliases: ['rdav', 'rana'],
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function avatar() {
            const GIF = await neko.sfw.avatar();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliger Anime-Avatar`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            avatar();
    }
}