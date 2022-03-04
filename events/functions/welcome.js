const welcomeData = require("../../database/guildData/welcome");
const welcomemsg = require("../../database/guildData/joinmsg");
const { MessageEmbed } = require('discord.js')

module.exports = async (member) => {
 const avatar = member.user.avatarURL;

 const data = await welcomeData.findOne({
   GuildID: member.guild.id,
 });
 if (data) {
   const data2 = await welcomemsg.findOne({
     GuildID: member.guild.id,
   });
   if (data2) {
     var joinmessage = data2.JoinMsg;

     joinmessage = joinmessage.replace("{user.mention}", `${member}`);
     joinmessage = joinmessage.replace("{user.name}", `${member.user.tag}`);
     joinmessage = joinmessage.replace("{server}", `${member.guild.name}`);
     joinmessage = joinmessage.replace(
       "{membercount}",
       `${member.guild.memberCount}`
     );

     let embed = new MessageEmbed()
       .setDescription(joinmessage)
       .setColor("RANDOM");

     let channel = data.Welcome;

     member.guild.channels.cache.get(channel).send({embeds: [embed]});
     
   } else if (!data2) {
     let embed2 = new MessageEmbed()
     .setTitle("Welcome")
      .setDescription(
        `Wir heißen dich herzlich Willkommen auf **${member.guild.name}**, ${member.user.mention}! 🎉🥳\n
        Du musst zuerst die Regeln und Serverbedingungen erfüllen/akzeptieren, bevor du den restlichen Channels sehen kannst oder überhaupt irgendwas machen zu können!\n
        Wenn du dies schon gemacht hast, dann vergiss nicht dir **Selbst-Rollen** in #『:mortar_board:』selbst-rollen zu holen.\n
        Wir wünschen dir viel Spaß auf **${member.guild.name}**.`
      )
      .setFooter(`Wir haben jetzt ${member.guild.memberCount} Members`)
      .setColor("RANDOM");
     
     let channel = data.Welcome

    member.guild.channels.cache.get(channel).send({ embeds: [embed2] });
   }
 }
};
