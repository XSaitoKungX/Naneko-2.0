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
        "🚫 | Sie haben die Vorlage nicht erwähnt!. Um die verfügbaren Meme-Vorlagen anzuzeigen, type `n.memetemplates`"
      );
    }
    const memetext1 = args[1];
    if (!memetext1) {
      return message.channel.send("🚫 | Bitte geben Sie den Text ein, der oben platziert werden soll!");
    }
    const memetext2 = args[2];
    if (!memetext2) {
      return message.channel.send("🚫 | Bitte geben Sie den Text ein, der unten platziert werden soll!");
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
      "Anscheinend ist ein Fehler aufgetreten!. Bitte versuche es in ein paar Stunden noch einmal!"
    );
    errorlogs.send("Error on Creatememe command! \n\nError:\n\n" + error);
  },
};
