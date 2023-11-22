const { SlashCommandBuilder } = require('discord.js');
const fs = require("node:fs")

module.exports = {
	data: new SlashCommandBuilder()
	.setName('message')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input message')
			.setRequired(true)),
	async execute(interaction) {

        const message = interaction.options.getString('input');
		const data_send = [
            {
                "role": "system",
                "content": "You are a pirate talking like a pirate each time",
            },
            {"role": "user", "content": message},
        ];
        const data = JSON.stringify(data_send)

        fs.writeFile('./bot/data.json', data, function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
		  async function readFile(filePath) {
			try {
			  const data = await fs.readFile(filePath);
			  return interaction.reply(data.toString());
			} catch (error) {
			  console.error(`Got an error trying to read the file: ${error.message}`);
			}
		  }

		  return await readFile("../../data.txt")
	},

};