const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'dog',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function dog() {
            const GIF = await neko.sfw.woof();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Hundebild / GIF`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            dog();
    }
}