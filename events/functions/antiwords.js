const antiwordsData = require('../../database/guildData/antiwords')
  module.exports = async (message) => {
    const antiwords = await antiwordsData.findOne({
      GuildID: message.guild.id,
    })
    if (antiwords) {
      if (message.content.match("bitch") || 
      message.content.match("hoe") || 
      message.content.match("mushi") || 
      message.content.match("nigga") || 
      message.content.match("nigg") || 
      message.content.match("dick") || 
      message.content.match("cunt") || 
      message.content.match("shit") || 
      message.content.match("fuck") || 
      message.content.match("hure")) {
        message.delete();
        message.reply("**Schimpfwörter sind auf diesem Server nicht erlaubt. Bitte hör auf damit! Ich werde dich erstmal nur warnen, aber falls es öfters vorkommt, dann wirst du umgehend bestraft.\nDu könntest gekickt werden, in schlimmsten Fall sogar gebannt!**").then(msg => {
          let time = '5s'
          setTimeout(function () {
            msg.delete();
          }, ms(time));
        })
      } else {
        return;
      }
    } else if (!antiwords) {
      return;
    }
  }
