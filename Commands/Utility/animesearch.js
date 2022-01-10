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
        return message.reply('bitte fügen Sie eine Suchabfrage hinzu!!');

        malScraper.getInfoFromName(search)
          .then((data) => {
          const malEmbed = new Discord.MessageEmbed()
            .setAuthor(`Meine Anime-Liste Suchergebnis für ${args}`.split(',').join(' '))
            .setThumbnail(data.picture)
            .setColor('#ffc1cc') //I personally use bubblegum pink!
            .addField('English Title', data.englishTitle, true)
            .addField('Japanese Title', data.japaneseTitle, true)
            .addField('Type', data.type, true)
            .addField('Episodes', data.episodes, true)
            .addField('Rating', data.rating, true)
            .addField('Aired', data.aired, true)
            .addField('Score', data.score, true)
            .addField('Score Stats', data.scoreStats, true)
            .addField('Link', data.url);

            message.channel.send({ embeds: [malEmbed] });

          })
}
};
