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
				'Ich habe ein Wort vermischt, es ist **`{{word}}`**. Du hast **{{time}}** Zeit, um das richtige Wort zu finden!',
			winMessage:
				'GG, es war **{{word}}**! Du hast in **{{time}} die richtige Antwort gegeben.** :tada:',
			loseMessage: 'Viel Glück beim nächsten Mal! Die richtige Antwort war **{{answer}}**.',
			incorrectMessage: "Nein {{author}}! Das Wort ist nicht `{{answer}}`",
			othersMessage: 'Nur der- oder diejenige, der mich gecodet hat, kann die Button benutzen, **{{author}}**!',
			time: 60000
		});
	}
}