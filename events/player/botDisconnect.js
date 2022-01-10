module.exports = async(queue, client) => {
    return client.say.queueMessage(client, queue, "Die Musik stoppte, da ich vom Sprachkanal getrennt wurde.", "RED");
  };