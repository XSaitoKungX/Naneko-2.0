const discord = require("discord.js");
const moment = require('moment');

module.exports = {
    name: "ping",
    aliases: ["pong", "p", "stats", "about"],
    category: "Utility",
    usage: "ping",
    description: "Get the bot's ping!",
    ownerOnly: false,
    nsfwOnly: false,
    run: async (client, message, args) => {

     let start = Date.now();

     let pingEmbed = new discord.MessageEmbed()
     .setDescription("Looks like the bot is slow.")
     .setColor("RANDOM")
  
  message.channel.send({ embeds: [pingEmbed] }).then(m => {
    
    let end = Date.now();

    const { version } = require("discord.js");
    const duration = moment
        .duration(message.client.uptime)
        .format(" D[d], H[h], m[m]");
    
    let embed = new discord.MessageEmbed()
    .setAuthor("Ping!", message.author.avatarURL())
    .addFields(
      {
        name: ":ping_pong: Ping",
        value: `┕\`${Math.round(client.ws.ping)}ms\``,
        inline: true,
      },
      {
        name: ":clock1: Uptime",
        value: `┕\`${duration}\``,
        inline: true,
      },
      {
        name: ":file_cabinet: Memory",
        value: `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
          2
        )}mb\``,
        inline: true,
      }
    )
    .addFields(
      {
        name: ":homes: Servers",
        value: `┕\`${client.guilds.cache.size}\``,
        inline: true,
      },
      {
        name: ":busts_in_silhouette: Users",
        value: `┕\`${client.users.cache.size}\``,
        inline: true,
      },
      {
        name: ":control_knobs: API Latency",
        value: `┕\`${message.client.ws.ping}ms\``,
        inline: true,
      }
    )
    .addFields(
      {
        name: ":robot: Version",
        value: `┕\`v${require('../../package.json').version}\``,
        inline: true,
      },
      {
        name: ":blue_book: Discord.js",
        value: `┕\`v${version}\``,
        inline: true,
      },
      {
        name: ":green_book: Node",
        value: `┕\`${process.version}\``,
        inline: true,
      }
    )
    .setColor("RANDOM");
    m.edit({ embeds: [embed] }).catch(e => message.channel.send(e))
    
  })

    }
};
