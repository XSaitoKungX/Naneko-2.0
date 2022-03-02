const Discord = module.require("discord.js");

module.exports = {
  name: "poll",
  description: "Start a Poll",
  userPerms: ["MANAGE_SERVER"],
  run: async (client, message, args) => {
    const pll = args.join(" ");
    if (!message.member.hasPermission("MANAGE_SERVER")) {
      return message.channel.send("🚫 | Du hast nicht genügend Berechtigungen!!");
    }
    if (!pll) {
      return message.channel.send("🚫 | Gib einen Text für die Umfrage ein!");
    }
    let embed = new Discord.MessageEmbed()
      .setTitle("**Poll Time**")
      .setDescription(`${pll}`)
      .setFooter(`Gestartet von: ${message.author.username}`)
      .setColor("RANDOM");
    message.channel
      .send({ embeds: [embed] })
      .then(function (message, str) {
        message.react("👍");
        message.react("👎");
      })
      .catch(function () {});
  },
};
