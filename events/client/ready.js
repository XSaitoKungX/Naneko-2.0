const chalk = require("chalk");
const mongoose = require("mongoose");
var os = require('os-utils');
const { mongoPass } = require("../../config.json"); 
module.exports = (client) => {

  const guildin = client.guilds.cache.size;
  const guildmember = client.users.cache.size;
  
 client.user.setPresence({ status: "online" });
let textList = [' About handling command',' in: ' + guildin + ' Server.' + 'Serving: ' + guildmember + ' Member',`Current Cpu core : ${os.cpuCount()}`]
 client.user.setPresence({ status: "online" });
 setInterval(() => {
   var text = textList[Math.floor(Math.random() * textList.length)];
  client.user.setActivity(text, { type: "WATCHING"});
}, 3000);

  let allMembers = new Set();
  client.guilds.cache.forEach((guild) => {
    guild.members.cache.forEach((member) => {
      allMembers.add(member.user.id);
    });
  });

  let allChannels = new Set();
  client.guilds.cache.forEach((guild) => {
    guild.channels.cache.forEach((channel) => {
      allChannels.add(channel.id);
    });
  });

  console.log(
    chalk.bgMagentaBright.black(` ${client.guilds.cache.size} Servers `),
    chalk.bgMagentaBright.black(` ${client.channels.cache.size} Channels `),
    chalk.bgMagentaBright.black(` ${allMembers.size} Members `)
  );

  mongoose
    .connect(mongoPass, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(
      console.log(
        chalk.bgGreenBright.black(
          ` ${client.user.username} Verbindung zu Mongo DB erfolgreich hergestellt `
        )
      )
    )
    .catch((err) =>
      console.log(
        chalk.bgRedBright.black(
          ` ${client.user.username} konnte keine Verbindung zu Mongo DB herstellen `
        )
      )
    );
};
