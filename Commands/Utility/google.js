const Discord = module.require("discord.js");

module.exports = {
  name: "google",
  description: "Search anything on google",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const text1 = args.join(" ");
    const text2 = args.join("+");
    const google = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`;
    if (!text2) {
      return message.channel.send("🚫 | Gib etwas ein, nach denen gesucht werden soll!");
    }
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        "Google",
        `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
      )
      .setThumbnail(
        `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`
      )
      .setDescription(
        `**Gesucht für: **\n${text1} \n\n**Ergebnis: **\n[Das habe ich gefunden](https://google.com/search?q=${text2})`
      )
      .setThumbnail(google)
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
  },
};
