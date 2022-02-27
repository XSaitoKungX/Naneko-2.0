const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "awkword",
    description: "Play awkword.io in Discord",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Du musst zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'awkword').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Awkword.io")
            .setDescription(`[Click Here](${invite.code}) um Awkword.io zu spielen!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}