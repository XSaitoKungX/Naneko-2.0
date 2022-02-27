const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: "dashboard",
    description: "View the dashboard for the required category.",
    botPerms: ["MANAGE_GUILD"],
    userPerms: ["ADMINISITRATOR"],
    run: async(client, message, args)=>{
        if (!args[0]){
            return message.channel.send(`Bitte gib eine Option an! Verfügbare Optionen:\`\`\`js\nadmin\nwelcomer\nlogging\n\`\`\``);
        }
        if (args[0] === "admin") {
            const adminMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("adminMenu")
                .setPlaceholder("Admin Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Antilink",
                        description: "Aktiviren oder Deaktieren Antilink System!",
                        value: "antilink",
                    },
                    {
                        label: "AutoRole",
                        description: "Aktiviren oder Deaktieren AutoRole System!",
                        value: "autorole",
                    },
                    {
                        label: "AutoMod",
                        description: "Aktiviren oder Deaktieren AutoMod System!",
                        value: "automod",
                    },
                    {
                        label: "Prefix",
                        description: "Ändere das Prefix des Bots für deinen Server!",
                        value: "prefix"
                    }
                ])
            )

            return message.channel.send({ content: "Admin Settings", components: [adminMenu]})

        } else if (args[0] === "welcomer") {
            const welcomerMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("welcomerMenu")
                .setPlaceholder("Welcomer Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Welcome Channel",
                        description: "Stell den Willkommenskanal für den Server ein!",
                        value: "welcome_channel",
                    },
                    {
                        label: "Leave Channel",
                        description: "Stell den Leaveskanal für den Server ein!",
                        value: "leave_channel",
                    },
                    {
                        label: "Welcome Message",
                        description: "Stell die Willkommensnachricht für den Server ein!",
                        value: "welcome_message",
                    },
                    {
                        label: "Leave Message",
                        description: "Stell die Leavesnachricht für den Server ein!",
                        value: "leave_message",
                    },
                    {
                        label: "Variables for Welcomer",
                        description: "Zeigt alle verfügbaren Variablen zur Verwendung in benutzerdefinierten Nachrichten an",
                        value: "variables",
                    }
                ])
            )

            return message.channel.send({ content: "Welcomer Settings" ,components: [welcomerMenu]})

        } else if (args[0] === "logging") {
            const loggingMenu = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                .setCustomId("loggingMenu")
                .setPlaceholder("Logging Menu")
                .setMinValues(1)
                .setMaxValues(1)
                .addOptions([
                    {
                        label: "Channel Updates",
                        description: "Lege den Kanal für die Protokollierung von Kanalaktualisierungen fest",
                        value: "channel_logs",
                    },
                    {
                        label: "Member Updates",
                        description: "Lege den Kanal für die Protokollierung von Mitgliederaktualisierungen fest",
                        value: "member_updates",
                    },
                    {
                        label: "Message Logs",
                        description: "Lege den Kanal für Nachrichtenprotokolle fest",
                        value: "message_logs",
                    },
                    {
                        label: "Role Updates",
                        description: "Lege den Kanal für die Protokollierung von Rollenaktualisierungen fest",
                        value: "role_updates",
                    },
                    {
                        label: "Server Updates",
                        description: "Stelle den Kanal für die Protokollierung der Serveraktualisierungen ein",
                        value: "server_updates",
                    },
                    {
                        label: "Voice State Updates",
                        description: "Stelle den Kanal für die Protokollierung von Sprachstatusaktualisierungen ein",
                        value: "voice_state_updates",
                    }
                ])
            )

            return message.channel.send({ content: "Logging Settings" ,components: [loggingMenu]})
        } else {
            return message.channel.send("🚫 | Diese Option scheint es nicht zu geben!")
        }
    }
}