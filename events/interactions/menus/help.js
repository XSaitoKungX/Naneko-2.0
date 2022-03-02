const Discord = require('discord.js');
const prefix = require('../../../database/guildData/prefix');

module.exports = async(interaction, client) => {
  
  if (!interaction.isSelectMenu()) return;

  if (interaction.customId === "help_menu") {

    let msg = await interaction.channel.message.fetch(interaction.message.id)

    if (interaction.values[0] === 'activities') {

      await interaction.deferUpdate()

      const activityEmbed = new Discord.MessageEmbed()
        .setTitle("Activity Commands")
        .setDescription("`awkword`, `betrayal`, `chess`, `doodlecrew`, `fishington`, `lettertile`, `poker`, `spellcast`, `youtube`")
        .setColor("RANDOM")
        .setTimestamp()
        .setThumbnail(client.user.avatarURL())
        .setFooter(`Angefördert von: ${message.author.username}`)

      await msg.edit({ embeds: [activityEmbed] })
    } else if (interaction.values[0] === 'animation') {

      await interaction.deferUpdate();

      const animationEmbed = new Discord.MessageEmbed()
        .setTitle("Animation Commands")
        .setDescription("`baka`, `cuddle`, `fact`, `feed`, `goose`, `hug`, `kill`, `kiss`, `lizard`, `neko`, `nekogif`, `pat`, `poke`, `randomavatar`, `respect`, `roast`, `slap`, `smug`, `tickle`, `waifu`, `wallpaper`, `why`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [animationEmbed] });
    } else if (interaction.values[0] === 'settings') {

      await interaction.deferUpdate();

      const settingsEmbed = new Discord.MessageEmbed()
        .setTitle("Config Commands")
        .setDescription("`antilink`, `antiword`, `autorole`, `dashboard`, `joinchannel`, `joinmessage`, `leavechannel`, `leavemessage`, `prefix`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [settingsEmbed] });
    } else if (interaction.values[0] === 'fun') {

      await interaction.deferUpdate();

      const funEmbed = new Discord.MessageEmbed()
        .setTitle("Fun Commands")
        .setDescription("`8ball`, `ascii`, `cat`, `catsay`, `clap`, `cowsay`, `cumart`, `dab`, `dog`, `emojify`, `enlargemoji`, `fliptext`, `gecg`, `gif`, `greentext`, `hack`, `howgay`, `joke`, `meme`, `nitro`, `orangetext`, `owofy`, `pokeimg`, `pp`, `reverse`, `spoiler`, `vaportext`, `yomama`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [funEmbed] });
    } else if (interaction.values[0] === 'game') {

      await interaction.deferUpdate();

      const gameEmbed = new Discord.MessageEmbed()
        .setTitle("Game Commands")
        .setDescription("`catchthefish`, `chaosword`, `connect4`, `fasttype`, `fight`, `football`, `guessthenumber`, `guessthepokemon`, `gunfight`, `lieswatter`, `neverhaveiever`, `quickclick`, `rps`, `shuffleguess`, `snake`, `trivia`, `ttt`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [gameEmbed] });
    } else if (interaction.values[0] === 'image') {

      await interaction.deferUpdate();

      const imageEmbed = new Discord.MessageEmbed()
        .setTitle("Image Commands")
        .setDescription("`achievement`, `afraid`, `alert`, `amazeme`, `amiajoke`, `bad`, `biden`, `challenge`, `changemymide`, `clyde`, `creatememe`, `cryingfloor`, `disastergirl`, `dockofshame`, `doge`, `drake`, `facepalm`, `feelsgood`, `illegal`, `keanu`, `memetemplates`, `phb`, `scroll`, `textimage`, `trash`, `trigger`, `trumptweet`, `wasted`, `wideavatar`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [imageEmbed] });
    } else if (interaction.values[0] === 'info') {

      await interaction.deferUpdate();

      const infoEmbed = new Discord.MessageEmbed()
        .setTitle("Info Commands")
        .setDescription("`avatar`, `botinfo`, `emojiid`, `help`, `invite`, `ping`, `policy`, `report`, `stats`, `suggest`, `userid`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [infoEmbed] });
    } else if (interaction.values[0] === 'moderation') {

      await interaction.deferUpdate();

      const modEmbed = new Discord.MessageEmbed()
        .setTitle("Moderation Commands")
        .setDescription("`annouce`, `ban`, `clear`, `createrole`, `delchannel`, `delrole`, `dm`, `esay`, `giverole`, `kick`, `lock`, `mute`, `newtext`, `newvoice`, `nickname`, `poll`, `removerole`, `softban`, `tempmute`, `unlock`, `unmute`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [modEmbed] });
    } else if (interaction.values[0] === 'nsfw') {

      await interaction.deferUpdate();

      if (!interaction.channel.nsfw) {
        const denyEmbed = new Discord.MessageEmbed()
          .setDescription("🚫 | Du kannst NSFW-Commands leider nur in NSFW-Channels lesen!")
          .setColor("RANDOM")

          return msg.edit({ embeds: [denyEmbed] })
      }

      const nsfwEmbed = new Discord.MessageEmbed()
        .setTitle("NSFW Commands")
        .setDescription("`4k`, `anal`, `ass`, `blowjob`, `boobs`, `cumslut`, `danbooru`, `erokemo`, `feet`, `feetgirl`, `femdom`, `foxgirl`, `futanari`, `gasm`, `girlsolo`, `girlsologif`, `gonewild`, `hentai`, `hentaiass`, `hentaigif`, `hentaithigh`, `holo`, `keta`, `kitsune`, `kuni`, `lesbian`, `lewd`, `milf`, `nsfwavatar`, `nsfwneko`, `nsfwnekogif`, `porngif`, `pussy`, `pussyart`, `pussywank`, `spank`, `thigh`, `tits`, `trap`, `yuri`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [nsfwEmbed] });
    } else if (interaction.values[0] === 'owner') {

      await interaction.deferUpdate();

      const ownerEmbed = new Discord.MessageEmbed()
        .setTitle("Owner Commands")
        .setDescription("`botserver`, `eval`, `nuke`, `shutdown`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [ownerEmbed] });
    } else if (interaction.values[0] === 'utility') {

      await interaction.deferUpdate();

      const utilityEmbed = new Discord.MessageEmbed()
        .setTitle("Utility Commands")
        .setDescription("`animesearch`, `calculator`, `google`, `imdb`, `say`, `servericon`, `serverinfo`, `suggestion`, `translate`, `urban`, `userinfo`, `weather`, `wiki`")
        .setColor("RANDOM")

      await msg.edit({ embeds: [utilityEmbed] });
    } else if (interaction.values[0] === 'music') {

      await interaction.deferUpdate();

      const musicEmbed = new Discord.MessageEmbed()
        .setTitle("Music Commands")
        .setDescription("`clearqueue`, `filter`, `filter list`, `info`, `jump`, `loop`, `lyrics`, `move`, `mute`, `pause`, `play`, `previoustrack`, `queue`, `remove`, `resume`, `unmute`, `volume`, `youtube`\n\n```Note: Musik Commands können momentan leider nur mit Slash-Commands verwendet werden! Wir arbeiten noch daran die Commands auch mit dem Prefix verwenden zu können. Es tut uns leid für diese Umstände!```")
        .setColor("RANDOM")

      await msg.edit({ embeds: [musicEmbed] });
    }
  }
}
