module.exports = async(queue, error, client) => {

    client.say.queueMessage(client, queue, "Beim Spielen ist ein Fehler aufgetreten. Verzeihen Sie für die Umstände.", "RED");

    return client.utils.sendErrorLog(client, { stack: `${error.message}`, name: "PLAYER_ERROR", code: `${queue.id}` }, "error");
};