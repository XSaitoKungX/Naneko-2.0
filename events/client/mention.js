const prefixModel = require("../../database/guildData/prefix");
const Discord = require("discord.js");

module.exports = async (message, client) => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))
    return;

  const { DEFAULT_PREFIX } = require("../../config.json")

  const prefixData = await prefixModel.findOne({
      GuildID: message.guild.id,
    }).catch(err=>console.log(err))
  
    if (prefixData) {
      var PREFIX = prefixData.Prefix
    } else if (!prefixData) {
      PREFIX = DEFAULT_PREFIX
    }
    client.prefix = PREFIX;

  // mentioned bot
  if (message.content ===`<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {

    const embed = new Discord.MessageEmbed()
      .setTitle("📨 | Mein Owner hat mich beauftragt, dir ein kleinen Tipp zu geben")
      .setDescription(`Da du mich angepingt hast, gehe ich mal davon aus, dass du nicht weißt, was mein Prefix ist und dass du vielleicht Hilfe benötigst? Wenn ja, dann mach dir keine Sorge, ich werde dir einen Tipp geben, wie du an die Befehle rankommst! Als alle erstes mein Prefix auf diesen Server ist: \`${PREFIX}\`\n\nUnd um alle meine Befehle sehen zu können/ ranzukommen, benutze hierfür: \`${PREFIX}help\`\nIch hoffe ich kann dir weiterhelfen. Also dann wir sehen uns später, bye~`)
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .setFooter(`Angefördert von: ${message.author.username}`)
      .setTimestamp()

      return message.channel.send({ embeds: [embed] })
  }
};
