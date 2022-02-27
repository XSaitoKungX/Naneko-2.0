const OWNER_ID = require("../../config.json").OWNER_ID;
module.exports = {
  name: "shutdown",
  description: "Shut's down the bot",
  run: async (client, message, args) => {
    if (!OWNER_ID)
      return message.channel.send("🚫 | Dieser Command ist nur für Developer zugängig!!");

    message.channel.send("Wird heruntergefahren...").then((m) => {
      client.destroy();
    });
    await message.channel.send("Der Bot wurde erfolgreich heruntergefahren.");
  },
};
