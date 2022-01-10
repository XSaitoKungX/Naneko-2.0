const { ShuffleGuess } = require("weky");

module.exports = {
	name: "shuffleguess",
	description: "Shuffle a word and guess it.",
	run: async(client, message, args)=>{
		await ShuffleGuess({
			message: message,
			embed: {
				title: 'Shuffle Guess | Weky Development',
				color: '#5865F2',
				footer: 'Naneko Games',
				timestamp: true
			},
			word: ['Programmieren'],
			button: { cancel: 'Cancel', reshuffle: 'Reshuffle' },
			startMessage:
				'Ich habe ein Wort vermischt, es ist **`{{word}}`**. Sie haben **{{time}}** Zeit, um das richtige Wort zu finden!',
			winMessage:
				'GG, es war **{{word}}**! Sie haben in **{{time}} die richtige Antwort gegeben.** :tada:',
			loseMessage: 'Viel Glück beim nächsten Mal! Die richtige Antwort war **{{answer}}**.',
			incorrectMessage: "Nein {{author}}! Das Wort ist nicht `{{answer}}`",
			othersMessage: 'Nur mein Geliebtes Meister: <@{{author}}> kann die Button verwenden!',
			time: 60000
		});
	}
}