const Discord = module.require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  name: "imdb",
  description: "Get the information about series and movies",
  botPerms: ["EMBED_LINKS"],
  enabled: false,
  run: async (client, message, args) => {
    const name = args.join(" ");
    if (!name) {
      return message.channel.send("🚫 | Bitte gib den Namen eines Films oder einer Serie an!");
    }

    const imob = new imdb.Client({ apiKey: "5e36f0db" });

    let movie = await imob.get({ name: args.join(" ") });

    const embed = new Discord.MessageEmbed()
      .setTitle(movie.Title)
      .setColor("RANDOM")
      .setThumbnail(movie.poster)
      .setDescription(
        `Beschreibung: \`${movie.plot}\`\nBewertungen: \`${movie.ratings}\`\nReligion: \`${movie.country}\`\nSprache: \`${movie.languages}\`\nGenre: \`${movie.type}\``
      );
    message.channel.send({ embeds: [embed] });
  },
};
