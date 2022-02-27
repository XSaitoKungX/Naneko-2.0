const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pat',
    run: async (client, message, args) => {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.pat();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("🤚 Streicheln")
                .setDescription(`**${message.author.username}** streichelt sich selbst.\nDas ist schon ein bisschen erbärmlich! :sweat_smile:`)
                .setImage(GIF.url)
                message.channel.send({ embeds: [embed] });
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.pat();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("🤚 Streicheln")
            .setDescription(`**${member.user.username}**, du wirst von **${message.author.username}** gestreichelt!\nIst er/sie nicht süß?~`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            ping();
        }
    }
}