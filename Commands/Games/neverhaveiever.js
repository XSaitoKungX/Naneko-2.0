const { NeverHaveIEver } = require("weky");

module.exports = {
	name: "neverhaveiever",
	description: "Never have I ever",
	run: async(client, message, args) => {
		await NeverHaveIEver({
			message: message,
			embed: {
				title: 'Never Have I Ever | Weky Development',
				color: '#5865F2',
				footer: 'Naneko Games',
				timestamp: true
			},
			thinkMessage: 'Ich bin am Überlegen..',
			othersMessage: `Nur der- oder diejenige, der mich gecodet hat, kann die Button benutzen, **{{author}}**!`,
			buttons: { optionA: 'Ja', optionB: 'Nein' }
		});
	}
}