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
				description: 'Du hast **{{time}}** Zeit, um die versteckten Wörter im folgenden Satz zu finden.',
				color: '#5865F2',
				field1: 'Wörter:',
				field2: 'Gefundene/verbleibende Wörter:',
				field3: 'Wörter gefunden:',
				field4: 'Wörter:',
				footer: 'Naneko Games',
				timestamp: true
			},
			winMessage: 'Glückwunsch, Du hast gewonnen! Und du hast das in **{{time}}** geschafft. :tada:',
			loseMessage: 'Viel Glück beim nächsten Mal!',
			wrongWordMessage: 'Falsch geraten! Du hast noch **{{remaining_tries}}** Versuche.',
			correctWordMessage: 'Congrats, **{{word}}** war richtig! :tada:\n Du musst **{{remaining}}** weitere(s) Wort(e) finden.',
			time: 60000,
			words: ['ich', 'liebe', 'es', 'den', 'ganzen', 'tag', 'zu', 'spielen'],
			charGenerated: 17,
			maxTries: 10,
			buttonText: 'Cancel',
			othersMessage: `Nur der- oder diejenige, der mich gecodet hat, kann die Button benutzen, **{{author}}**!`
		});
	}	
}