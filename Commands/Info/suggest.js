const Discord = module.require("discord.js");

module.exports = {
  name: "suggest",
  description: "Suggest Features for Naneko",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const avatar = message.author.avatarURL;
    const suggestchannel = client.channels.cache.get("911943116146221126");
    const suggestion = args.join(" ");
    if (!suggestion) {
      return message.channel.send("🚫 | Du musst etwas vorschlagen!!");
    }
    message.channel.send(
      "Vielen Dank für den Vorschlag von Funktionen für Naneko. Unser Mod-Team wird dich informieren, ob dein Vorschlag angenommen wird oder nicht!"
    );
    const embed = new Discord.MessageEmbed()
      .setAuthor(`New Suggestion!`, avatar)
      .setDescription(`${suggestion} \n\nBy: ${message.author.tag}`)
      .setFooter(`ID: ${message.author.id}`)
      .setColor("RANDOM");

    suggestchannel.send({ embeds: [embed] });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("912404023280304148");
    message.channel.send(
      "⚠ | Anscheinend ist ein Fehler aufgetreten. Der Fehler wurde an den Berichtsabschnitt gemeldet!!"
    );
    errorlogs.send(`⚠ | Fehler im Suggest-Befehl! \nError: \n` + error);
  },
};
