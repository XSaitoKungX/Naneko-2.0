const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'poke',
    run: async (client, message, args) => {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.poke();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("👉 Anstuppsen")
                .setDescription(`**${message.author.username}** stuppst.\nHör auf damit! Das sieht voll komisch aus!`)
                .setImage(GIF.url)
                message.channel.send({ embeds: [embed] });
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.poke();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("👉 Anstuppsen")
            .setDescription(`**${member.user.username}**, du wirst von **${message.author.username}** angestuppst! :joy:`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            ping();
        }
    }
}