const Discord = module.require("discord.js");

module.exports = {
  name: "pokeimg",
  description: "Get Image of the Mentioned Pokemon",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const state = "enabled";
    if (state === "disabled") {
      return message.channel.send("🚫 | Der Befehl ist vorerst deaktiviert!");
    }
    const name = args.join(" ");
    if (!name) {
      return message.channel.send("🚫 | Sie haben vergessen, den Pokemon-Namen einzugeben!!");
    }
    const link = `https://i.some-random-api.ml/pokemon/${name}.png`;
    const embed = new Discord.MessageEmbed()
      .setTitle(`${name}`)
      .setImage(link)
      .setColor("RANDOM");

    message.channel.send({embeds: [embed]});
  },
};
