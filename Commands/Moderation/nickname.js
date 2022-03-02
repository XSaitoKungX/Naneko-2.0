const Discord = module.require("discord.js");

module.exports = {
  name: "nickname",
  description: "Change the Nickname of other Users",
  userPerms: ["MANAGE_NICKNAMES"],
  botPerms: ["MANAGE_NICKNAMES"],
  run: async (client, message, args) => {
    let mentionMember = message.mentions.members.first();
    let newNickname = args.slice(1).join(" ");
    if (!mentionMember) {
      return message.reply("erwähne den Benutzer, dessen Spitznamen du ändern möchtest.");
    }
    if (!newNickname) {
      return message.reply("gib den neuen Spitznamen für den von dir erwähnten Benutzer ein.");
    }
    try {
      mentionMember.setNickname(newNickname);
    } catch (error) {
      message.reply(
        "ich kann den Spitznamen dieses Benutzers nicht ändern! Hat dieser User vielleicht eine höhere Rolle? Ist er/ sie Server-Ersteller/in? Habe ich die Erlaubnis, seinen/ ihren Spitznamen zu ändern?"
      );
    }
    message.channel.send(
      `✅ | Spitzname von ${mentionMember} wurde zu **${newNickname}** geändert.`
    );
  },
};
