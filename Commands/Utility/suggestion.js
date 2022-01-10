const Discord = module.require("discord.js");

module.exports = {
  name: "suggestion",
  description: "Anything",
  botPerms: ["EMBED_LINKS", "MANAGE_MESSAGES", "ADD_REACTIONS"],
  run: async (client, message, args) => {
    const msg = args.join(" ");
    message.delete();
    if (!msg) {
      return message.channel.send("🚫 | Bitte fügen Sie bitte einen Vorschlag hinzu!!");
    }
    const suggestionchannel = message.guild.channels.cache.find(
      (c) => c.name === "suggestions"
    );
    if (!suggestionchannel) {
      return message.channel.send(
        'Dieser Server hat keinen Kanal namens "suggestions", wenn der Kanal mit einem anderen Namen existiert, empfehle ich Ihnen, den Kanalnamen zu ändern in `suggestions`'
      );
    }
    await message.channel.send(
      `${message.author}, Ihr Vorschlag wurde übermittelt.`
    );

    const embed = new Discord.MessageEmbed()
      .setTitle("**Neue Vorschläge**")
      .setDescription(`${msg}`)
      .setFooter(`Vorgeschlagen von: ${message.author.tag}`)
      .setColor("RANDOM");

    suggestionchannel
      .send({ embeds: [embed] })
      .then(function (message, str) {
        message.react("✅");
        message.react("❎");
      })
      .catch(function () {});
  },
};
