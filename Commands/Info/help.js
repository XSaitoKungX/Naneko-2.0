const { MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");

module.exports = {
  name: "help",
  description: "Get the Command List",
  aliases: ["commands", "cmd", "h"],
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    if (args[0]) {
      let command = args[0];
      let cmd = client.commands.get(command);

      if (!cmd) {
        return message.channel.send("🚫 | Konnte diesen Befehl nicht finden!")
      } else if (cmd) {
        let description = cmd.description ? cmd.description : "Keine Beschreibung verfügbar.";
        let aliases = cmd.aliases ? cmd.aliases.join(", ") : "Keine Aliases verfügbar.";
        let botPerms = cmd.botPerms ? cmd.botPerms.join(", ") : "Keine Berechtigungen erforderlich.";
        let userPerms = cmd.userPerms ? cmd.userPerms.join(", ") : "Keine Berechtigungen erforderlich.";
        let ownerOnly = cmd.ownerOnly ? "Yes" : "No";
        let nsfwOnly = cmd.nsfwOnly ? "Yes" : "No";
        let cooldown = cmd.cooldown ? cmd.cooldown : "Kein Cooldown.";
        let isDisabled = cmd.isDisabled ? "Yes" : "No";

        let helpEmbed = new MessageEmbed()
        .setTitle(`Help Commands für **${cmd.name}**`)
        .addField("Name", `${cmd.name}`, true)
        .addField("Beschreibung", `${description}`, true)
        .addField("Aliases", `${aliases}`, true)
        .addField("Owner Only", `${ownerOnly}`, true)
        .addField("NSFW Only", `${nsfwOnly}`, true)
        .addField("Cooldown", `${cooldown}`, true)
        .addField("Disabled", `${isDisabled}`, true)
        .addField("Required Bot Permissions", `${botPerms}`, true)
        .addField("Required User Permissions", `${userPerms}`, true)
        .setColor("GREEN")

        return message.channel.send({ embeds: [helpEmbed] })
      }

    } else if (!args[0]) {

    let helpMenu = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("help_menu")
      .setPlaceholder('Help Menu')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "Activities",
          description: "Greife auf die neue Discord-Aktivitäten-Funktion zu",
          value: "activities",
          emoji: "🎁"
        },
        {
          label: "Animation",
          description: "Zeigt alle Animation Commands an",
          value: "animation",
          emoji: "🎭"
        },
        {
          label: "Settings",
          description: "Die Bot-Einstellungen konfigurieren",
          value: "settings",
          emoji: "🛠"
        },
        {
          label: "Fun",
          description: "Zeigt alle Fun Commands an",
          value: "fun",
          emoji: "🎲"
        },
        {
          label: "Games",
          description: "Zeigt alle Games Commands an",
          value: "game",
          emoji: "🎮"
        },
        {
          label: "Image",
          description: "Zeigt alle Image Commands an",
          value: "image",
          emoji: "🖼"
        },
        {
          label: "Information",
          description: "Zeigt alle Information Commands an",
          value: "info",
          emoji: "📢"
        },
        {
          label: "Moderation",
          description: "Zeigt alle Moderation Commands an",
          value: "moderation",
          emoji: "🔒"
        },
        {
          label: "NSFW",
          description: "Zeigt alle NSFW Commands an",
          value: "nsfw",
          emoji: "🔞"
        },
        {
          label: "Owner",
          description: "Zeigt alle Owner Commands an",
          value: "owner",
          emoji: "👑"
        },
        {
          label: "Utility",
          description: "Zeigt alle Utility Commands an",
          value: "utility",
          emoji: "🔧"
        },
        {
          label: "Music",
          description: "Zeigt alle Musik Commands an",
          value: "music",
          emoji: "🎵"
        }
      ])
    )

    let editEmbed = new MessageEmbed()
    .setTitle('Help Menu')
    .setDescription('Wähle eine Option aus dem Menü unten aus!')
    .setColor("GREEN")

      message.channel.send({ embeds: [editEmbed], components: [helpMenu]}).then(msg=>{
        setTimeout(async function () {
          await msg.delete();
        }, 180000)
      })
    }
  }
};
