const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "chess",
    description: "Play chess in Discord",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Sie müssen zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'chessDev').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Chess.io")
            .setDescription(`[Click Here](${invite.code}) um **Chess.io** zu spielen!\n\`\`\`\nNote: Diese Funktion ist für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}