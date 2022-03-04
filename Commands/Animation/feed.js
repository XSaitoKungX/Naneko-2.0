const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'feed',
    run: async (client, message, args) => {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.feed();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle(`${message.author.username} füttert sich selbst. Wie traurig :pleading_face:`)
                .setImage(GIF.url)
                message.channel.send({ embeds: [embed] });
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.feed();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`**${member.user.username}**, du wurdest von **${message.author.username}** gefüttert. Ihr seid echt Süß~ :smiling_face_with_3_hearts:`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            ping();
        }
    }
}