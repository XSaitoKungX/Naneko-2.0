const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK

module.exports = {
  name: "ascii",
  aliases: [],
  category: "Fun",
  usage: "ascii <text>",
  description: "Returns provided text in ascii format.",
  run: async (client, message, args) => {
    let text = args.join(" ");
    if (!text) {
      return message.channel.send(`\`Usage: =ascii <msg>\``);
    }
    let maxlen = 20;
    if (text.length > 20) {
      return message.channel.send(
        `Bitte gib Text mit 20 Zeichen oder weniger ein, da die Konvertierung nicht gut sein wird!`
      );
    }
    // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!
    figlet(text, function (err, data) {
      message.channel.send(data, {
        code: "AsciiArt",
      });
    });
  },
};
