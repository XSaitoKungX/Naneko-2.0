
module.exports = async(queue, client) => {

      return client.say.queueMessage(client, queue, "Keine Lieder mehr zum Abspielen. Ich verlasse jetzt den Sprachkanal. 👋");
};