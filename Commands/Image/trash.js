const Discord = module.require("discord.js");

module.exports = {
  name: "trash",
  description: "Another Image Manipulation Command",
  botPerms: ["ATTTACH_FILES"],
  enabled: false,
  run: async (client, message, args) => {
   const mention = message.mentions.members.first();
        if (!mention) {
            return message.channel.send("🚫 | Du musst jemanden erwähnen!");
        }
        const user1 = message.author;
        const avatar1 = user1.displayAvatarURL({size: 512, format: "png"});
        const avatar2 = mention.user.displayAvatarURL({size: 512, format: "png"});
        const link = await client.images.image.trash({ face: avatar1, trash: avatar2})

        await message.channel.send({files : [{attachment: link }]})
  },
};