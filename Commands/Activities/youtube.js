const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "youtube",
    description: "Watch Youtube in Discord!",
    run: async(client, message, args) => {

      if (!message.member.voice.channelId) {
        return message.channel.send('🚫 | Du musst zuerst einem Sprachkanal beitreten!')
      }
        client.discordTogether.createTogetherCode(message.member.voice.channelId, 'youtubeDev').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Youtube Together")
            .setDescription(`[Click Here](${invite.code}) um auf Youtube Together zuzugreifen!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("RED")
            .setFooter(`Requested By: ${message.author.tag}`)
            
            return message.channel.send({ embeds: [embed] });
        });
    }
}