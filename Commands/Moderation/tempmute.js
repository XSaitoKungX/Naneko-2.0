const { MessageEmbed } = module.require("discord.js");
const ms = require("ms");
const discord = require("discord.js");

module.exports = {
  name: "tempmute",
  category: "info",
  description: "Returns latency and API ping",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();

    const role = message.guild.roles.cache.find((ro) => ro.name === "Muted");
    if (!role) {
      message.guild.roles.create({
        data: {
          name: "muted",
          color: "GRAY",
        },
      });
    }
    if (!user) {
      return message.channel.send("🚫 | Du musst den Benutzer angeben!!");
    }
    if (user.id === message.owner.id) {
      return message.channel.send(
        "Du kannst jeden Mod-Befehl gegen den Serverbesitzer verwenden!!"
      );
    }
    const time = args[0];
    if (!time) {
      return message.channel.send(
        "❓ | Wie lange willst diese Person stummschalten? ()"
      );
    }
    const reason = args.slice(1).join(" ");
    if (!reason) {
      return message.channel.send(
        "❓ | Aus welchem Grund wirst du tempmutest??: "
      );
    }
    const mtembde = new MessageEmbed()
      .setTitle("Action: Tempmute")
      .setColor("RANDOM")
      .addField("User:", user)
      .addField("Reason", reason)
      .addField("Moderator:", message.member.displayName)
      .addField("Time", time, true);
    const mtuembde = new MessageEmbed()
      .setTitle("SIE WURDEN GEMUTET!!")
      .setColor("RANDOM")
      .addField("Reason", reason)
      .addField("Moderator:", message.member.displayName)
      .addField("Time", time, true);
    user.send({ embeds: [mtuembde] });
    message.channel.send({ embeds: [mtembde] });
    user.roles.add(role);
    setTimeout(function () {
      user.roles.remove(role);
      user.send(`⚠ | Du bist jetzt nicht mehr stummgeschaltet! Wir hoffen, dass du dich beim nächsten Mal an die Regeln halten wirst!!`);
    }, ms(time));
  },
};
