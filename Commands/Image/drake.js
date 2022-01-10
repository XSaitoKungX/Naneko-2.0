const Discord = require("discord.js");

module.exports = {
    name: "drake",
    permissions: ["SEND_MESSAGES"],
    cooldown: 3,
    description: "Image Manipulation Command",
    async execute(client, message, cmd, args, Discord) {
        message.channel.send("⚠ **| Dieser Befehl `drake` ist aufgeteilt in zwei Texte**").then((msg) => {
            setTimeout(function () {
                msg.edit("⚠ **| Beispiel: du bist mir egal | <--Teilt sich hier und geht hier weiter--> kümmere dich nicht um dich**")
                setTimeout(function () {
                    msg.edit("⚠ **| Max ist 1 Zeichen für den ersten Split | Fahren Sie dann mit dem zweiten Zeichen fort**")
                }, 15000)
            }, 15000)
        })
        const text = args.slice(1).join(" ");
        if (!text) {
            return message.channel.send("**🚫 | Sie müssen etwas schreiben!!**")
        }

        const text2 = args.slice(2).join(" ");
        if (!text2) {
            return message.channel.send("**Geben Sie den zweiten Text ein!**")
        }

        message.channel.send({ files: [{ attachment: `https://api.popcatdev.repl.co/drake?text1=${text}&text2=${text2}`, name: "reaperdrake.png" }] });
    }
}
