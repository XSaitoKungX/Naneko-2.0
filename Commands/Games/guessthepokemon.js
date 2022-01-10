const { GuessThePokemon } = require("weky");

module.exports = {
	name: "guesspokemon",
	description: "Guess the pokemon",
	run: async(client, message, args)=>{
		await GuessThePokemon({
			message: message,
			embed: {
				title: 'Guess The Pokémon | Weky Development',
				description:
					'**Type:**\n{{type}}\n\n**Abilities:**\n{{abilities}}\n\nSie haben nur noch **{{time}}**, um das Pokémon zu erraten.',
				color: '#5865F2',
				footer: 'Naneko Games',
				timestamp: true
			},
			thinkMessage: 'Ich denke noch..',
			othersMessage: 'Nur mein geliebtes Meister: <@{{author}}> kann die Button verwenden!',
			winMessage:
				'GG, Es war ein **{{answer}}**. Sie haben es in **{{time}}** richtig erraten. :tada:',
			loseMessage: 'Viel Glück beim nächsten Mal! Es war ein **{{answer}}**.',
			time: 60000,
			incorrectMessage: "Nein, {{author}}! Das Pokémon ist nicht `{{answer}}`. Es ist wirklich Schade, versuchen Sie es später nochmal.",
			buttonText: 'Abbrechen'
		});
	}
}