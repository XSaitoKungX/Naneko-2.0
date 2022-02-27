const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'slap',
    run: async (client, message, args) => {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.slap();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("👏 Ohrfeigen")
                .setDescription(`**${message.author.username}** vergibt eine Ohrfeige!`)
                .setImage(GIF.url)
                message.channel.send({ embeds: [embed] });
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.slap();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("👏 Ohrfeigen")
            .setDescription(`**${member.user.username}**, du bekommst eine Ohrfeige von **${message.author.username}**.\nDas ist echt fies von ihm/ihr!`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            ping();
        }
    }
}