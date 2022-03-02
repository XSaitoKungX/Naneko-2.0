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
       .setTitle("Goodbye")
       .setThumbnail(member.user.avatarURL())
       .setDescription(
         `Das ist wirklich eine Schande, dass **${member.user.tag}** uns verlassen hat. Wir dachten wir könnten gemeinsam Spaß haben, aber naja dagegen kann man nichts machen.\n
         Wir wünschen dir alles gute und viel Glück noch. Wer weiß vielleicht sehen wir uns ja irgendwann mal wieder. Vielleicht wieder hier Oder vielleicht auch auf einem anderen Server.\n\n
         Falls ihr eine Idee habt, wie wir unserer Server schöner und besser gestalten können, dann hau einfach raus! Dafür haben wir euch einen Kanal bereit gestellt.
         Wenn ihr eure Ideen lieber Privat bei **꧁Saito꧂#6248** äußern/mitteilen wollt, seine DM ist immer öffen.\nNaja lange Rede, kurzer Sinn, ich sage in dem Sinne **Tschau**!`
       )
       .setFooter(`Wir haben jetzt noch ${member.guild.memberCount} Members!`)
       .setThumbnail(member.user.avatarURL())
       .setColor("RANDOM");

     let byechannel = data.Bye;

     member.guild.channels.cache.get(byechannel).send({embeds: [embed2]});
   }
 }
};
