module.exports = {
  name: "clear",
  description: "delete the given number of messages",
  userPerms: ["MANAGE_MESSAGES"],
  botPerms: ["MANAGE_MESSAGES"],
  run: async (client, message, args) => {
   
    const fetched = message.channel || message.mentions.members.first();
    let messageArray = message.content.split(" ");
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.channel.send(
        `${message.author.username}, Sie können Max. nur 1-99 Nachrichten löschen!!`
      );
    } else if (amount <= 1 || amount > 100) {
      return message.channel.send(
        `${message.author.username}, Sie können Max. nur 1-99 Nachrichten löschen!!`
      );
    }

    fetched.bulkDelete(amount, true);
    fetched.bulkDelete(amount);
  },
};
