const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'goose',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function goose() {
            const GIF = await neko.sfw.goose();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Gans-Bild`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            goose();
    }
}