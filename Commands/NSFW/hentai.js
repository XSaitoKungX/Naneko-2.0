const discord = require("discord.js");
const got = require("got"); //MAKE SURE TO INSTALL THE PACKAGE "GOT" ELSE THE CODE WOULD NOT WORK

module.exports = {
  name: "hentai",
  category: "NSFW",
  description: "Sends random hentai",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    //command
    try {
      var errMessage = "NSFWs sind für diesen Channel nicht erlaubt!";
      if (!message.channel.nsfw) {
        message.react("💢");

        return message.reply(errMessage).then((msg) => {
          setTimeout(() => msg.delete(), 3000);
        });
      }
      got("https://www.reddit.com/r/hentai/random.json")
        .then((response) => {
          let content = JSON.parse(response.body);
          var title = content[0].data.children[0].data.title;
          var amazeme = content[0].data.children[0].data.url;
          let wow = new discord.MessageEmbed()
            .setDescription(`**` + title + `**`)
            .setImage(amazeme)
            .setFooter(`Credits to r/hentai`)
            .setColor("RANDOM");
          message.channel.send({ embeds: [wow] });
        })
        .catch(console.error);
    } catch (err) {
      const errorlogs = client.channels.cache.get("912404023280304148");

      message.channel.send(
        `Hoppla, wir haben gerade einen Fehler! Dieser Fehler wurde dem Support-Center gemeldet!`
      );

      errorlogs.send(
        `Fehler in ${message.guild.name} von ${message.author.username} bei hentai commands!\n\nError:\n\n ${err}`
      );
    }
  },
};
