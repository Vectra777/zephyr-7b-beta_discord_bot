import { Client, Events, GatewayIntentBits } from "discord.js";
const token = "MTE2MTY3MjM3Mzk5NzY3ODY2NA.GgfDOa.tffD0WtuHf0PeIyXnF889un4VLdkC018sro9s8"

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});


client.login(token);