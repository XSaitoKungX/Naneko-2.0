const Discord = module.require("discord.js");

module.exports = {
  name: "catsay",
  description: "Make the cat say your message",
  botPerms: ["ATTTACH_FILES", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    message.delete();
    const state = "enabled";
    if (state === "disabled") {
      return message.channel.send("🚫 | Befehl wurde vorerst deaktiviert!");
    }
    const msg = args.join(" ");
    if (!msg) {
      return message.channel.send("Was soll die Katze sagen??");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://cataas.com/cat/cute/says/${msg}`,
          name: "catsay.png",
        },
      ],
    });
  },
};
