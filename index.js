"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const token = "MTE2MTY3MjM3Mzk5NzY3ODY2NA.GgfDOa.tffD0WtuHf0PeIyXnF889un4VLdkC018sro9s8";
const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
client.once(discord_js_1.Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});
client.login(token);
