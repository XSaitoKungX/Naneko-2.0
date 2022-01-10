const discord = require("discord.js");
const translate = require('@iamtraction/google-translate');

module.exports = {
  name: "translate",
  description: "Translates the given message.",
  run: async (client, message, args) => {
        const txt = args.slice(1).join(" ")
        const lang = args[0]
        if(!lang) return message.channel.send("Geben Sie den ISO-Code der Sprache an.")
        if(!txt) return message.channel.send("Geben Sie einen zu übersetzenden Text an.")
        translate(txt, { to: lang }).then(res => {
          const embed = new discord.MessageEmbed()
          .setDescription(res.text)
          .setColor("RANDOM")
          message.channel.send({ embeds: [embed] });
    }).catch(err => {
      message.channel.send("Bitte geben Sie einen gültigen ISO-Sprachcode an.")
    });
  },
};
