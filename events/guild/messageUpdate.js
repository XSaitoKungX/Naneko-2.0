const messageData = require("../../database/guildData/messagelogs")
const { MessageEmbed } = require("discord.js")

module.exports = async(oldMessage, newMessage) => {
    const data = await messageData.findOne({
        GuildID: newMessage.guild.id
    })

    if (!data) return;

    const channel = data.ChannelID

    const embed = new MessageEmbed()
    .setTitle("Message Edited")
    .setDescription(`${newMessage.author} edited their message in ${newMessage.channel}`)
    .addField('Spring zu der Nachricht', `[Click Me](https://discord.com/channels/${newMessage.guild.id}/${newMessage.channel.id}/${newMessage.id})`)
    .addField(`Alte Nachricht`, `${oldMessage.content}`, true)
    .addField('Neue Nachricht', `${newMessage.content}`, true)
    .setColor('GREEN')
    .setTimestamp()

    newMessage.guild.channels.cache.get(data.ChannelID).send({ embeds: [embed] })
}