const Discord = module.require("discord.js");

module.exports = {
  name: "weather",
  description: "Shows Weather for the provided place",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const name = args.join(" ");
    const place = args.join("-");
    if (!place) {
      return message.channel.send(
        "🚫 | Bitte gib den Namen eines Landes/ einer Stadt/ einer Stadt ein."
      );
    }
    const link = `https://wttr.in/${place}.png?m`;
    const weblink = `https://wttr.in/${place}`;
    const embed = new Discord.MessageEmbed()
      .setTitle(`${name}'s Wetter für die nächsten 3 Tage`)
      .setImage(link)
      .setFooter("Credits to Wttr.in")
      .setColor("RANDOM");
    message.channel.send({ embeds: [embed] });
  },
};
