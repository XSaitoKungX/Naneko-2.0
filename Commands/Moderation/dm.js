const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dm",
  description: "Sends DM message to any user.",
  userPerms: ["MANAGE_GUILD"],
  usage: "dm <@mention> <msg>",
  aliases: ["dme" , "msgme"],
  //botPerms: ["ADMINISTRATOR"],//
  //userPerms: ["ADMINISITRATOR"],//

  run: async (client, message, args) => {
      message.delete();

      if (!args[0]) {
      
      let Embed89 = new MessageEmbed()
      .setDescription('Deine Nachricht bitte!')
      .setTitle("**Syntax Helper - Command**")
      .setColor("RANDOM")
      .setFooter('Deine Fußzeilen-Nachricht bitte!')
      return message.channel.send({ embeds: [Embed89] })}

      

      const user = message.mentions.users.first();
      const text = args.slice(1).join(" ");

      
      
    if (!user) {let Embed172 = new MessageEmbed()
        .setDescription("Bitte gib einen **gültigen** Benutzer an.")
        .setTitle("**Error - Impossible Action**")
        .setColor("RANDOM")
        .setFooter('Prefix: n.')
        return message.channel.send({ embeds: [Embed172] })}

        
    

    if (!text){let Embed172 = new MessageEmbed()
        .setDescription("Bitte gib eine **Nachricht** ein.")
        .setTitle("**Error - Impossible Action**")
        .setColor("RADNOM")
        .setFooter('Deine Fußzeilen-Nachricht bitte!')
        return message.channel.send({ embeds: [Embed172] })}

       
      let embed = new MessageEmbed()
      .setTitle("**Lieber User**")
      .setDescription(`${text}`)
      .setColor("RANDOM")
      .setFooter('Direct Message')
      user.send({ embeds: [embed] })
    
  },

};
