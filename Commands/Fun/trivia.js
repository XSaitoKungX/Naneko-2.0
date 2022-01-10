const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Beste Programmiersprache Ever!",
    options: ["JavaScript/TypeScript", "Python", "Ruby", "Rust"],
    correct: 1,
  },

  {
    title: "Bestes NPM-Pakage Ever!",
    options: ["int.engine", "ms", "ws", "discord.js"],
    correct: 4,
  },

  {
    title: "Welcher Befehl ist besser?",
    options: ["8ball", "emoify", "ascii", "flipword"],
    correct: 2,
  },
  //you can also add more!
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "fun",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Beantworten Sie diese Nachricht mit der richtigen Fragenummer! Sie haben 15 Sekunden Zeit.`
      );
    message.channel.send({ embeds: [Embed] });
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`✅ | WOW, Glükwunsch!! Sie haben die richtige Antwort gegeben!! Wenn es keinen Grund zum Feiern ist.. :tada: :partying_face:`);
      } else {
        return message.channel.send(`:x: | Es tut mir leid, aber das war leider falsch! :pleading_face: Aber Kopf hoch! Sie können es später nochmal probieren :)`);
      }
    } catch (e) {
      return message.channel.send(`🚫 | Sie haben mir leider keine Antwort darauf gegeben! Sie können gern später nochmal versuchen, vielleicht haben Sie dann ja Glück :)`);
    }
  },
};
