const { ChaosWords } = require("weky")

module.exports = {
	name: "chaoswords",
	description: "A simple chaoswords game.",
	category: "games",
	aliases: ["cw"],
	run: async(client, message, args) => {
		await ChaosWords({
			message: message,
			embed: {
				title: 'ChaosWords | Weky Development',
				description: 'Sie haben **{{time}}** Zeit, um die versteckten Wörter im folgenden Satz zu finden.',
				color: '#5865F2',
				field1: 'Wörter:',
				field2: 'Gefundene/verbleibende Wörter:',
				field3: 'Wörter gefunden:',
				field4: 'Wörter:',
				footer: 'Naneko Games',
				timestamp: true
			},
			winMessage: 'Glückwunsch, Sie haben gewonnen! Und Sie haben das in **{{time}}** geschafft. :tada:',
			loseMessage: 'Viel Glück beim nächsten Mal!',
			wrongWordMessage: 'Falsch geraten! Sie haben noch **{{remaining_tries}}** Versuche.',
			correctWordMessage: 'Congrats, **{{word}}** war richtig! :tada:\n Sie müssen **{{remaining}}** weitere(s) Wort(e) finden.',
			time: 60000,
			words: ['hello', 'these', 'are', 'words'],
			charGenerated: 17,
			maxTries: 10,
			buttonText: 'Abbrechen',
			othersMessage: 'Nur mein geliebtes Meister: <@{{author}}> kann die Button verwenden!'
		});
	}	
}