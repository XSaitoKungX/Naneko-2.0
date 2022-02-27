const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'kiss',
    run: async (client, message, args) => {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.kiss();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("😘 Küssen")
                .setDescription(`**${message.author.username}** küsst sich selbst. Ehm.. Wie soll denn sowas gehen?..`)
                .setImage(GIF.url)
                message.channel.send({ embeds: [embed] });
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.kiss();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("😘 Küssen")
            .setDescription(`**${member.user.username}**, du bekommst einen Kuss von **${message.author.username}**!\nNaww, wie Romantisch :face_with_hand_over_mouth:`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            ping();
        }
    }
}