const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'nekogif',
    run: async (client, message, args) => {
        if (!message.guild) return;
            async function nekogif() {
            const GIF = await neko.sfw.nekoGif();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${message.author.username}**, hier ist ein zufälliges Neko-GIF`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            nekogif();
    }
}