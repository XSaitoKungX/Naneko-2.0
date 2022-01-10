const Discord = module.require("discord.js");

module.exports = {
  name: "slap",
  description: "Slaps a user",
  run: async (client, message, args) => {
    let member = message.mentions.members.first();
    if (!member) {
      return message.reply("🚫 | Sie müssen jemanden erwähnen!");
    }
  const embed = new Discord.MessageEmbed()
    .setTitle(message.author.name + " slapped :raised_back_of_hand: " +
          member.displayName +
          ", " +
          member.displayName +
          " befindet sich jetzt im Krankenhaus!! :hospital:")
      .setColor("RANDOM");
    await message.reply({ embeds: [embed] });
  },
};
