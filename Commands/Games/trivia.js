const { Trivia } = require("weky");

module.exports = {
	name: "trivia",
	description: "Play a game of trivia!",
	run: async(client, message, args)=> {
		await Trivia({
			message: message,
			embed: {
				title: 'Trivia | Weky Development',
				description: 'Du hast nur **{{time}}** Zeit, um die Antwort zu erraten!',
				color: '#5865F2',
				footer: 'Naneko Games',
				timestamp: true
			},
			difficulty: 'hard',
			thinkMessage: 'Ich bin am Überlegen..',
			winMessage:
				'GG, es war **{{answer}}**. Du hast in **{{time}}** die richtige Antwort gegeben. :tada:',
			loseMessage: 'Viel Glück beim nächsten Mal! Die richtige Antwort war **{{answer}}**.',
			emojis: {
				one: '1️⃣',
				two: '2️⃣',
				three: '3️⃣',
				four: '4️⃣',
			},
			othersMessage: 'Nur der- oder diejenige, der mich gecodet hat, kann die Button benutzen, **{{author}}**!',
			returnWinner: false
		});
	}
}