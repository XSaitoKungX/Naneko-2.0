const Discord = module.require("discord.js");

module.exports = {
  name: "report",
  description: "Report a bug",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const reportchannel = client.channels.cache.get("911607446345236510");
    const report = args.join(" ");
    if (!report) {
      return message.channel.send(
        "Geben Sie die Beschreibung des aufgetretenen Fehlers ein!"
      );
    }
    message.channel.send(
      `${message.author}, Ihr Report wurde erfolgreich übermittelt. Unser Mod-Teams werden Ihnen so schnell wie möglich antworten`
    );
    const embed = new Discord.MessageEmbed()
      .setTitle("⚠ | **NEUE FEHLERMELDUNG!**")
      .setDescription(`${report} \n\nBy: ${message.author.tag}`)
      .setFooter(`User ID: ${message.author.id}`)
      .setColor("RANDOM");

    reportchannel.send({embeds: [embed]});
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("912404023280304148");
    message.channel.send(
      "Anscheinend ist ein Fehler aufgetreten. Der Fehler wurde an die Berichtssektion gemeldet!"
    );
    errorlogs.send("Fehler beim Reportbefehl \nError: \n" + error);
  },
};
