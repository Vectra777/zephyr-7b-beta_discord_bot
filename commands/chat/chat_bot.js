const { SlashCommandBuilder } = require('discord.js');
const fs = require("node:fs")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('chat')
        .addStringOption(option =>
			option
				.setName('message'))
		.setDescription('Ask the bot a question'),
	async execute(interaction) {

        const message = interaction.option.getString("message");

        const data_send = [
            {
                "role": "system",
                "content": "You are a pirate talking like a pirate each time",
            },
            {"role": "user", "content": message},
        ];
        const data = JSON.stringify(data_send)

        fs.writeFile('data.json', data, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
          
		return interaction.reply('Pong!');
	},

};