const Discord = module.require("discord.js");

module.exports = {
  name: "8ball",
  description: "Tells you a fortune",
  run: async (client, message, args) => {
    if (args.length == 0)
      return message.channel
        .send("`Usage: n.8ball <msg>`")
        .then((msg) =>setTimeout(() => msg.delete(), 2300));

    var fortunes = [
      "Ja!",
      "Na, Sicher!",
      "Es ist entschieden so.",
      "Ohne Zweifel!",
      "Ja, Definitiv!",
      "Darauf können Sie sich verlassen!",
      "So, wie ich es sehe, ja.",
      "Höchstwahrscheinlich!",
      "Outlook good.",
      "Die Zeichen deuten auf ja :)",
      "Ihre Frage war zu verschwommen. Bitte versuchen Sie es erneut.",
      "Fragen Sie später noch einmal.",
      "Erzähle es Ihnen jetzt besser nicht...",
      "Es tut mir leid, Meister! Ich kann leider nicht vorhersagen! :pleading_face:",
      "Meister!! Konzentrieren Sie sich und fragen Sie mich erneut >.<",
      "Rechne nicht damit XD",
      "Meine Antwort ist **Nein**!!",
      "Meine Quellen sagen **Nein**!!",
      "Das sieht nich so gut aus...",
      "Sehr zweifelhaft!!",
    ];
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};
