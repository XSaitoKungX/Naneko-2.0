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
      return message.reply("erwähnen Sie den Benutzer, dessen Spitznamen Sie ändern möchten.");
    }
    if (!newNickname) {
      return message.reply("geben Sie den neuen Spitznamen für den von Ihnen erwähnten Benutzer ein.");
    }
    try {
      mentionMember.setNickname(newNickname);
    } catch (error) {
      message.reply(
        "kann den Spitznamen dieses Benutzers nicht ändern, hat dieser User vielleicht eine höhere Rolle? Ist er/ sie Server-Ersteller/in? Habe ich die Erlaubnis, seinen/ ihren Spitznamen zu ändern?"
      );
    }
    message.channel.send(
      `Spitzname von ${mentionMember} wurde zu **${newNickname}** geändert.`
    );
  },
};
