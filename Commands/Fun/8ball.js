const Discord = module.require("discord.js");

module.exports = {
  name: "8ball",
  description: "Tells you a fortune",
  run: async (client, message, args) => {
    if (args.length == 0)
      return message.channel
        .send("`Usage: =8ball <msg>`")
        .then((msg) =>setTimeout(() => msg.delete(), 2300));

    var fortunes = [
      "Jawohl.",
      "Es ist sicher.",
      "Es ist entschieden, so.",
      "Ohne Zweifel.",
      "Ja auf jeden Fall.",
      "Darauf kannst du dich verlassen.",
      "So, wie ich es sehe, ja.",
      "Höchstwahrscheinlich.",
      "Gute Aussichten.",
      "Die Zeichen deuten auf ja.",
      "Antwort verschwommen, versuche es erneut!",
      "Frag später noch einmal.",
      "Erzähl es dir jetzt besser nicht...",
      "Kann jetzt nicht vorhersagen.",
      "Konzentrier dich und frag noch einmal!",
      "Verlasse dich nicht darauf.",
      "Meine Antwort ist nein!",
      "Meine Quellen sagen Nein!",
      "Outlook ist nicht so gut...",
      "Sehr zweifelhaft.",
    ];
    await message.channel.send(
      fortunes[Math.floor(Math.random() * fortunes.length)]
    );
  },
};
