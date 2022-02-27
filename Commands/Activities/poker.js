const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poker",
    description: "Play poker in Discord",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Du musst zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'poker').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Poker.io")
            .setDescription(`[Click Here](${invite.code}) um Poker.io zu spielen!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}