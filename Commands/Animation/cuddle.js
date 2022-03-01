const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'cuddle',
    run: async (client, message, args) => {
        var member = message.mentions.members.first();

        const GIF = await neko.sfw.cuddle();
        const embed1 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("👐 Knuddeln")
            .setDescription(`**${message.author.username}** knuddelt sich selbst!\nEr/Sie braucht dringend von jemanden geknuddelt werden!`)
            .setImage(GIF.url)
        
        if (!member)
        return message.channel.send({ embeds: [embed1] })

        // const GIF = await neko.sfw.cuddle();
        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("👐 Knuddeln")
            .setDescription(`**${member.user.username}**, du wurdest von **${message.author.username}** geknuddelt!\nIst das nicht Süsss?`)
            .setImage(GIF.url)

        if (member)
        return message.channel.send({ embeds: [embed2]})
    }
}