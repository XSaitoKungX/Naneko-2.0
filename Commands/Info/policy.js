const Discord = module.require("discord.js")

module.exports = {
  name: "policy",
  description: "Shows the privacy policy for our bot",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const icon = client.user.avatarURL;
    const embed = new Discord.MessageEmbed()
      .setTitle("Naneko BOT PRIVACY POLICY")
      .setThumbnail(icon)
      .setDescription("Durch die Nutzung des Bots stimmen Sie unserer Datenschutzerklärung zu")
      .addField(
        "**WELCHE DATEN SPEICHERN WIR?**",
        `
        Wir sammeln keine persönlichen Informationen zu deinem Account wie Passwörter oder andere Zugangsdaten. Die von uns gesammelten Daten umfassen die Benutzer-IDs, Server-IDs, Kanal-IDs und einige Rollen-IDs. Der Bot fordert niemals persönliche Daten der Benutzer an und jede Handlung, die gegen die Tos of Discord verstößt, wird von uns abgeraten!`
      )
      .addField(
        "**WARUM WIR DIESE DATEN BRAUCHEN?**",
        `
        Die Daten werden für das ordnungsgemäße Funktionieren der Bot-Funktionen wie Warnsystem, Protokollierung und Autorolen benötigt. Ohne diese Daten kann unser Bot diese Aktivitäten nicht ausführen und macht die Funktionen für Benutzer unzugänglich`
      )
      .addField(
        "**WIE VERWENDEN WIR DIESE DATEN?**",
        `
        Die Daten werden für das ordnungsgemäße Funktionieren des Warnsystems, der Protokollierungsaktivitäten und der Autorole-Funktionen unseres Bots verwendet. Benutzer-IDs werden verwendet, um die Benutzer zu identifizieren, Kanal-IDs werden verwendet, um die Nachrichten an die vorgesehenen Kanäle zu senden, und Server-IDs werden verwendet, um die Server zu identifizieren, und die Rollen-IDs werden für die Autorole-Funktion verwendet`
      )
      .addField(
        `**WIE LANGE SPEICHERN WIR IHRE DATEN?**`,
        `
        Die Daten werden so lange gespeichert, wie sich der Bot auf Ihrem Server befindet und sobald der Bot gekickt oder vom Server entfernt wird, werden die Daten gelöscht und sind für niemanden mehr zugänglich`
      )
      .addField(
        "**AN WEN WIR DIE DATEN TEILEN**?",
        `
        Wir geben deine Daten niemals an Dritte weiter, außer an [MongoDB Inc.](https://mongodb.com), die ein Datenbankunternehmen ist und alle Daten für unseren Bot werden auf den MongoDB-Servern gespeichert und laut MongoDB Inc. sind die Daten nur von uns erreichbar.`
      )
      .addField(
        "**HABEN BEDENKEN ODER FRAGEN?**",
        `
        Wenn du Bedenken oder Fragen zu unserer Datenschutzrichtlinie oder unserem Bot hst oder möchtest, dass deine Daten entfernt werden, dann kannst du dich direkt an [꧁Saito꧂#6248](https://discord.com/users/848917797501141052) über unseren [Support Server](https://dsc.gg/infinity-support) melden!`
      )
      .setThumbnail(client.user.avatarURL())
      .setFooter(`Requested by: ${message.author.username}`)
      .setColor("RANDOM");

    return message.channel.send({embeds: [embed]});
  },
};