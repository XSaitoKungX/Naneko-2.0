const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cat',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function cat() {
            const GIF = await neko.sfw.meow();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Katzenbild / GIF`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            cat();
    }
}