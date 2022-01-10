const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    name: "dashboard",
    description: "View the dashboard for the required category.",
    botPerms: ["MANAGE_GUILD"],
    userPerms: ["ADMINISITRATOR"],
    run: async(client, message, args)=>{
        if (!args[0]){
            return message.channel.send(`🚫 | Bitte geben Sie eine Option an! Verfügbare Optionen:\`\`\`js\nadmin\nwelcomer\nlogging\n\`\`\``);
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
                        description: "Akzeptieren oder Deaktivieren Antilink-System!",
                        value: "antilink",
                    },
                    {
                        label: "AutoRole",
                        description: "Akzeptieren oder Deaktivieren AutoRole-System!",
                        value: "autorole",
                    },
                    {
                        label: "AutoMod",
                        description: "Akzeptieren oder Deaktivieren AutoMod-System!",
                        value: "automod",
                    },
                    {
                        label: "Prefix",
                        description: "Das Prefix für Ihren Server ändern.",
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
                        description: "Welcome-Channel für Ihren Server einrichten.",
                        value: "welcome_channel",
                    },
                    {
                        label: "Leave Channel",
                        description: "Leave-Channel für Ihren Server einrichten.",
                        value: "leave_channel",
                    },
                    {
                        label: "Welcome Message",
                        description: "Welcome-Message für Ihren Server einrichten.",
                        value: "welcome_message",
                    },
                    {
                        label: "Leave Message",
                        description: "Leave-Message für Ihren Server einrichten.",
                        value: "leave_message",
                    },
                    {
                        label: "Variables for Welcomer",
                        description: "Zeigt alle verfügbaren Variablen zur Verwendung in benutzerdefinierten Nachrichten an.",
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
                        description: "Lege den Kanal für die Protokollierung von Kanalaktualisierungen fest.",
                        value: "channel_logs",
                    },
                    {
                        label: "Member Updates",
                        description: "Lege den Kanal für die Protokollierung von Mitgliederaktualisierungen fest.",
                        value: "member_updates",
                    },
                    {
                        label: "Message Logs",
                        description: "Lege den Kanal für Nachrichtenprotokolle fest.",
                        value: "message_logs",
                    },
                    {
                        label: "Role Updates",
                        description: "Lege den Kanal für die Protokollierung von Rollenaktualisierungen fest.",
                        value: "role_updates",
                    },
                    {
                        label: "Server Updates",
                        description: "Lege den Kanal für die Protokollierung der Server-Updates fest.",
                        value: "server_updates",
                    },
                    {
                        label: "Voice State Updates",
                        description: "Lege den Kanal für die Protokollierung von Sprachstatusaktualisierungen fest.",
                        value: "voice_state_updates",
                    }
                ])
            )

            return message.channel.send({ content: "Logging Settings" ,components: [loggingMenu]})
        } else {
            return message.channel.send("🚫 | Ups, diese Option scheint nicht zu existieren!!")
        }
    }
}