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
     let embed2 = new MessageEmbed
     .setTitle("**NEWS JOIN: WELCOME!** :tada:")
      .setDescription(
        `Heyyy, ${member}!! Willkommen auf **${member.guild.name}!!**\n
        Bitte vergessen Sie nicht erstmal die Regeln durchzulesen und dann zu akzeptieren, sonst können Sie die Kanäle und VC nicht sehen!! 
        Außerdem vergessen Sie nicht die Selbst-Rollen zu holen, damit Sie auf den neunsten Stand sind, falls wir Updates oder Events haben!\n
        Wir wünschen Ihnen viel Spaß auf unseren Server 🥰 Und falls Sie fragen haben, unseren Server-Teams stehen Ihnen jederzeit zur Verfügung!\n
        LG Ihren ${member.guild.name} Team`
      )
      .setFooter(`WOWWW!!! Wir haben jetzt ${member.guild.memberCount} Members auf dem Server!`)
      .setColor("RANDOM");
     
     let channel = data.Welcome

    member.guild.channels.cache.get(channel).send({ embeds: [embed2] });
   }
 }
};
