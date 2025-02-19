const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "activity",
    description: "Use The Discord's activity feature",
    options: [
        {
          name: "youtube",
          description: "Watch Youtube on Discord!",
          type: 'SUB_COMMAND'
        },
        {
          name: "chess",
          description: "Play chess on Discord!",
          type: 'SUB_COMMAND'
        },
        {
          name: "awkword",
          description: "Play Awkword.io on Discord!",
          type: 'SUB_COMMAND'
        },
        {
          name: "doodlecrew",
          description: "Play Doodle Crew on Discord!",
          type: 'SUB_COMMAND'
        },
         {
          name: "fishington",
          description: "Play Fishington.io on Discord!",
          type: 'SUB_COMMAND'
        },
         {
          name: "lettertile",
          description: "Play Lettertile.io on Discord!",
          type: 'SUB_COMMAND'
        },
         {
          name: "poker",
          description: "Play Poker.io on Discord!",
          type: 'SUB_COMMAND'
        },
         {
          name: "spellcast",
          description: "Play Spellcast.io on Discord!",
          type: 'SUB_COMMAND'
        },
        {
          name: "checkers",
          description: "Play Checkers.io on Discord!",
          type: 'SUB_COMMAND'
        },
        {
          name: "puttparty",
          description: "Play Puttparty on Discord!",
          type: 'SUB_COMMAND'
        },
        {
          name: "wordsnack",
          description: "Play Wordsnack on Discord!",
          type: 'SUB_COMMAND'
        }

      ],
    run: async(client, interaction, args) => {

        if (interaction.options.getSubcommand() === 'youtube') {

        let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }

        client.discordTogether.createTogetherCode(member.voice.channelId, 'youtube').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Youtube Together")
            .setDescription(`[Click Here](${invite.code}) to access Youtube Together!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("RED")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        } else if (interaction.options.getSubcommand() === 'awkword') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'awkword').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Awkword.io")
            .setDescription(`[Click Here](${invite.code}) um Awkword.io!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }else if (interaction.options.getSubcommand() === 'chess') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'chessDev').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Chess.io")
            .setDescription(`[Click Here](${invite.code}) um Chess.io!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }        else if (interaction.options.getSubcommand() === 'betrayal') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'betrayal').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Betrayal.io")
            .setDescription(`[Click Here](${invite.code}) um Betrayal.io!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }else if (interaction.options.getSubcommand() === 'doodlecrew') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'doodlecrew').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Doodle Crew")
            .setDescription(`[Click Here](${invite.code}) um Doodle Crew!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }
        else if (interaction.options.getSubcommand() === 'fishington') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'fishington').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Fishington.io")
            .setDescription(`[Click Here](${invite.code}) um Fishington.io!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }else if (interaction.options.getSubcommand() === 'lettertile') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'lettertile').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Lettertile.io")
            .setDescription(`[Click Here](${invite.code}) um Lettertile.io!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }
        else if (interaction.options.getSubcommand() === 'poker') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'poker').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Poker.io")
            .setDescription(`[Click Here](${invite.code}) um Poker.io!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }else if (interaction.options.getSubcommand() === 'spellcast') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'spellcast').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Spellcast.io")
            .setDescription(`[Click Here](${invite.code}) um Spellcast.io!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }else if (interaction.options.getSubcommand() === 'checkers') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'checkers').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Checkers")
            .setDescription(`[Click Here](${invite.code}) um Checkers!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }else if (interaction.options.getSubcommand() === 'puttparty') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'puttparty').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Puttparty")
            .setDescription(`[Click Here](${invite.code}) um Puttparty!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }else if (interaction.options.getSubcommand() === 'wordsnack') {
          let member = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.member.id)

        if (!member.voice.channelId) {
            return interaction.reply('du musst zuerst einem Sprachkanal beitreten!')
          }
        client.discordTogether.createTogetherCode(interaction.member.voice.channelId, 'wordsnack').then(async(invite) => {
            
            let embed = new MessageEmbed()
            .setTitle("Wordsnack")
            .setDescription(`[Click Here](${invite.code}) um Wordsnack!\n\`\`\`\nNote: Diese Funktion ist nur für mobile Benutzer nicht verfügbar!\`\`\``)
            .setColor("GREEN")
            .setFooter(`Requested By: ${interaction.member.user.username}`)
            
            return interaction.reply({ embeds: [embed] });
        });
        }
    }
}
