const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'wallpaper',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function wallpaper() {
            const GIF = await neko.sfw.wallpaper();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Hintergrundbild`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            wallpaper();
    }
}