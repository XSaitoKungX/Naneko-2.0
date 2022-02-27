const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
  name: "animesearch",
  category: "utility",
description: "Get info about an anime",
usage: "[command | Anime]",
run: async (client, message, args) => {
        const search = `${args}`;
        if(!search)
        return message.reply('bitte füge eine Suchanfrage hinzu, wenn ein ungültiger Befehl nicht funktioniert.');

        malScraper.getInfoFromName(search)
          .then((data) => {
          const malEmbed = new Discord.MessageEmbed()
            .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
            .setThumbnail(data.picture)
            .setColor('RANDOM') //I personally use bubblegum pink!
            .addField('Englischer Titel', data.englishTitle, true)
            .addField('Japanischer Titel', data.japaneseTitle, true)
            .addField('Type', data.type, true)
            .addField('Episoden', data.episodes, true)
            .addField('Bewertung', data.rating, true)
            .addField('Ausgestrahlt', data.aired, true)
            .addField('Score', data.score, true)
            .addField('Score Stats', data.scoreStats, true)
            .addField('Link', data.url);

            message.channel.send({ embeds: [malEmbed] });

          })
}
};
