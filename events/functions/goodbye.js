const byeData = require("../../database/guildData/leavechannel");
const byemsg = require("../../database/guildData/leavemessage");
const { MessageEmbed } = require('discord.js')

module.exports = async (member) => {
 const avatar = member.user.avatarURL;

 const data = await byeData.findOne({
   GuildID: member.guild.id,
 });
 if (data) {
   const data2 = await byemsg.findOne({
     GuildID: member.guild.id,
   });
   if (data2) {
     var leavemessage = data2.ByeMsg;

     leavemessage = leavemessage.replace("{user.mention}", `${member}`);
     leavemessage = leavemessage.replace("{user.name}", `${member.user.tag}`);
     leavemessage = leavemessage.replace("{server}", `${member.guild.name}`);
     leavemessage = leavemessage.replace(
       "{membercount}",
       `${member.guild.memberCount}`
     );

     let embed = new MessageEmbed()
       .setDescription(`${leavemessage}`)
       .setColor("RANDOM");

     let channel = data.Bye;

     member.guild.channels.cache.get(channel).send({embeds: [embed]});
   } else if (!data2) {
     let embed2 = new MessageEmbed()
       .setTitle("**NEWS LEAVE: Goodbye!**")
       .setThumbnail(member.user.avatarURL())
       .setDescription(
         `**${member.user.tag}** hat leider den Server verlassen!!\nHabt ihr vielleicht eine Ahnung oder Ideen, wie wir unseren Server 
         Interessante, Besser gestalten können, damit die Users uns nicht verlassen?? Falls ja, dann hau mal raus. Wir freuen uns immer auf neue Ideen :) 
         Der Channel dafür werden wir für euch bereit stellen.\n
         Wir hoffen sehr, dass er/sie uns bald wieder besuchen wird! :pleading_face:`
       )
       .setFooter(`Wir haben jetzt noch ${member.guild.memberCount} Members!`)
       .setThumbnail(member.user.avatarURL())
       .setColor("RANDOM");

     let byechannel = data.Bye;

     member.guild.channels.cache.get(byechannel).send({embeds: [embed2]});
   }
 }
};
