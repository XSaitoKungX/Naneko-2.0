const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cuddle',
    run: async (client, message, args) => {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.cuddle();
                const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("👐 Knuddeln")
                .setDescription(`**${message.author.username}** knuddelt sich selbst!\nEr/Sie braucht dringend von jemanden geknuddelt werden!`)
                .setImage(GIF.url)
                message.channel.send({ embeds: [embed] });
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.cuddle();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("👐 Knuddeln")
            .setDescription(`**${member.user.username}**, du wurdest von **${message.author.username}** geknuddelt!\nIst das nicht Süsss?`)
            .setImage(GIF.url)
            message.channel.send({ embeds: [embed] });
            }
            ping();
        }
    }
}