const Discord = require("discord.js");

module.exports = {
    name: "feelsgood",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Image Manipulation Command",
    run: async (client, message, args) => {
        const splitArgs = args.join(" ").split("/")
        const text1 = splitArgs[0]
        if (!text1) return message.channel.send("Argumentiere richtig! Hinweis: Verwende '/', um den Text zu teilen")
        const text2 = splitArgs[1]
        if (!text2) return message.channel.send("Argumentiere richtig! Hinweis: Verwende '/', um den Text zu teilen")
        message.channel.send({ files: [{ attachment: `https://api.memegen.link/images/feelsgood/${text1}/${text2}`, name: "meme.png" }] });
    }
}
