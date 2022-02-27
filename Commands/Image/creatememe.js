const Discord = module.require("discord.js");

module.exports = {
  name: "creatememe",
  description: "Create Custom Memes",
  botPerms: ["ATTTACH_FILES", "MANAGE_MESSAGES"],
  run: async (client, message, args) => {
    message.delete();
    const memetemplate = args[0];
    if (!memetemplate) {
      return message.channel.send(
        "🚫 | Du hast die Vorlage nicht erwähnt! Um die verfügbaren Meme-Vorlagen anzuzeigen, gib `n.memetemplates` ein"
      );
    }
    const memetext1 = args[1];
    if (!memetext1) {
      return message.channel.send("🚫 | Gib den Text ein, der oben platziert werden soll!");
    }
    const memetext2 = args[2];
    if (!memetext2) {
      return message.channel.send("🚫 | Gib den zu platzierenden Text unten ein!");
    }
    message.channel.send({
      files: [
        {
          attachment: `https://api.memegen.link/images/${memetemplate}/${memetext1}/${memetext2}`,
          name: "custommeme.png",
        },
      ],
    });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("912404023280304148");
    message.channel.send(
      "⚠ | Scheint ein Fehler aufgetreten zu sein!. Bitte versuche es in ein paar Stunden erneut!"
    );
    errorlogs.send("Error on Creatememe command! \n\nError:\n\n" + error);
  },
};
