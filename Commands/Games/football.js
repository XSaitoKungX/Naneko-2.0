module.exports = {
	name: 'football',
	aliases: ['fb'],
	run: async (client, message, args) => {
		const positions = {
			left: '_ _                   🥅🥅🥅\n_ _                   🕴️\n      \n_ _                         ⚽',
			middle: '_ _                   🥅🥅🥅\n_ _                        🕴️\n      \n_ _                         ⚽',
			right: '_ _                   🥅🥅🥅\n_ _                              🕴️\n      \n_ _                         ⚽',
		};
		let randomized = Math.floor(Math.random() * Object.keys(positions).length);
		let gameEnded = false;
		let randomPos = positions[Object.keys(positions)[randomized]];

		const componentsArray = [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 'SECONDARY',
						custom_id: 'links',
						label: 'Links',
					},
					{
						type: 2,
						style: 'PRIMARY',
						custom_id: 'mittel',
						label: 'Mittel',
					},
					{
						type: 2,
						style: 'SECONDARY',
						custom_id: 'rechts',
						label: 'Rechts',
					},
				],
			},
		];

		const msg = await message.channel.send({
			content: randomPos,
			components: componentsArray,
		});
		function update() {
			randomized = Math.floor(Math.random() * Object.keys(positions).length);
			randomPos = positions[Object.keys(positions)[randomized]];

			msg.edit({
				content: randomPos,
				components: componentsArray,
			});
		}
		setInterval(() => {
			if(gameEnded == false) return update();
		}, 1000);

		const filter = button => {
			return button.user.id === message.author.id;
		};
		const button = await msg.awaitMessageComponent({ filter: filter, componentType: 'BUTTON', max: 1 });

		if(button.customId !== Object.keys(positions)[randomized]) {
			gameEnded = true;
			return button.reply({ content: 'Glückwunsch, Sie haben gewonnen! :tada:' });
		}
		else {
			gameEnded = true;
			return button.reply({ content: 'Sie haben leider verloren... Versuchen Sie es später nochmal.' });
		}
	},
};