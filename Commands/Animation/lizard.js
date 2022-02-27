const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'lizard',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function lizard() {
            const GIF = await neko.sfw.lizard();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Eidechsenbild`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            lizard();
    }
}