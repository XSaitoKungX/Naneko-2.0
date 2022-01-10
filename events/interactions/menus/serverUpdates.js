const { IntegrationApplication } = require("discord.js");
const serverData = require("../../../database/guildData/serverupdates")

module.exports = async(interaction, client) => {
    if (!interaction.isSelectMenu()) return;
    let msg = await interaction.channel.messages.fetch(interaction.message.id)
    if (interaction.values[0] === "server_updates") {

        await interaction.deferUpdate()
        
        const data = await serverData.findOne({
            GuildID: interaction.guild.id
        })

        if (!data) {
            await msg.edit("Bitte senden Sie die **CHANNEL ID**, um die Server-Update-Protokolle einzurichten")

            const filter = (m) => m.author.id === interaction.member.id

            let channelID;

            const collector = await interaction.channel.createMessageCollector({ filter, time: 60000 })

            collector.on('collect', async(collected, returnValue) => {
                channelID = collected.content

                let channel = interaction.guild.channels.cache.get(channelID)

                if (!channel) return msg.edit("Ich konnte diesen Kanal leider nicht finden!")

                let newData = new serverData({
                    ChannelID: channelID,
                    GuildID: interaction.guild.id
                })
    
                newData.save()

                await collector.stop()
    
                return msg.edit(`Server updates werden in --> ${interaction.guild.channels.cache.get(channelID)} angezeigt.`)
            })

            collector.on('end', async(collected, returnValue) => {
                console.log("Collector Stopped!")
            })

        } else if (data) {
            await serverData.findOneAndRemove({
                GuildID: interaction.guild.id
            })

            return msg.edit(`Die Protokollierung von Server-Updates wurde gestoppt!`)
        }
    }
}