const { LieSwatter } = require("weky");

module.exports = {
	name: "lieswatter",
	description: "Is it a lie?",
	run: async(client, message, args)=>{
		await LieSwatter({
			message: message,
			embed: {
				title: 'Lie Swatter | Weky Development',
				color: '#5865F2',
				footer: 'Naneko Games',
				timestamp: true
			},
			thinkMessage: 'Ich denke nach..',
			winMessage:
				'GG, Es war ein **{{answer}}**. Du hast es richtig erraten. Und du hast in **{{time}}** geschafft. :tada:',
			loseMessage: 'Viel Glück beim nächsten Mal! Es war ein **{{answer}}**.',
			othersMessage: `Nur der- oder diejenige, der mich gecodet hat, kann die Button benutzen, **{{author}}**!`,
			buttons: { true: 'Truth', lie: 'Lie' }
		});
	}
}