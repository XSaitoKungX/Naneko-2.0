const Discord = require("discord.js");
const toHex = require("colornames");

module.exports = {
  name: "createrole",
  description: "Creates A new role in the guild",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const name = args.slice(1).join(" ");
    const regex = !/[^a-zA-Z0-9]+/g.test(name);

    if (!args[0]) {
      return message.channel.send("`Usage: n.createrole <colorname> <Name>`");
    }
    if (!name) {
      return message.channel.send("🚫 | Sie müssen einen Namen für Ihre Rolle angeben!!");
    }
    if (regex === false) {
      return message.channel.send(
        "🚫 | Das ist kein gültiger Rollenname. Es darf nur Buchstaben und Zahlen enthalten!!"
      );
    }
    if (name.length > 100) {
      return message.channel.send(
        "Ihre Rolle darf nicht länger als 100 Zeichen sein!!"
      );
    }
    message.guild.roles.create({
      data: {
        name: name,
        color: toHex(args[0]),
      },
    });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        `${message.author.username} - (${message.author.id})`,
        message.author.displayAvatarURL()
      )
      .setColor("RANDOM").setDescription(`
**Rolle: ** ${name}
**Action: ** New Role Created
**Rolle Farbe: ** ${args[0]}
**Channel: ** ${message.channel}
**Von: ** ${message.member}
      `);
    message.channel.send({ embeds: [embed] });
  },
};
