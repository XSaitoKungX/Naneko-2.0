const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'hug',
    run: async (client, message, args) => {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.hug();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("👐 Umarmung")
                .setDescription(`**${message.author.username}** umarmt sich selbst.\nKann jemand **${message.author.username}** umarmen? :pleading_face:`)
                .setImage(GIF.url)
                message.channel.send({ embeds: [embed] });
            }
            no_ping();
            }

            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.hug();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("👐 Umarmung")
            .setDescription(`**${member.user.username}**, du bekommst eine Umarmung von **${message.author.username}**!\Das ist wirklich Cutee~~`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            ping();
        }
    }
}