const { SlashCommandBuilder } = require('discord.js');
const fs = require("fs").promises;

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
            { "role": "user", "content": message },
        ];
        const data = JSON.stringify(data_send);

        try {
            // Write the data to the file
            await fs.writeFile('./bot/data.json', data);
            console.log('File saved!');

            // Wait until the file is created
            const outputFile = 'C:\\Users\\crafi\\Desktop\\discord_bot\\output.txt';
            while (!(await fileExists(outputFile))) {
                // Sleep for a short duration before checking again
                await sleep(1000);
            }

            // File is created, proceed with reading and responding
            let output = await fs.readFile(outputFile, 'utf-8');
            output = output.slice(output.indexOf("") + 13);

            // Respond to the interaction
            return interaction.reply(output.toString());
        } catch (error) {
            console.error(`Error: ${error.message}`);
            return interaction.reply('An error occurred while processing your command.');
        }
    },
};

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch (error) {
        return false;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
