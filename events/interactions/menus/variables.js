const { MessageEmbed } = require("discord.js")

module.exports = async(interaction, client) => {
    if (!interaction.isSelectMenu()) return;

    let msg = await interaction.channel.messages.fetch(interaction.message.id)

    if (interaction.values[0] === "variables") {
        await interaction.deferUpdate()

        return msg.edit((`\`\`\`js
        {user.mention} - Erwähnt den Benutzer, der den Server verlassen/beigetreten ist.
        {user.name} - Der Benutzername des Benutzers, der den Server verlassen hat/beigetreten ist.
        {server} - Der Name des Servers.
        {membercount} - Die Mitgliederzahl des Servers.
        \`\`\`
        `))
    }
}