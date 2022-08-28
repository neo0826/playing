const { Client, Collection } = require("discord.js");

const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "everyone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [
    "GUILDS",
    "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"],
});
module.exports = client;
client.commands = new Collection();
//////////coded by ANO

client.on('ready', () => {
    client.user.setActivity(`Updating`,{ type: 'PLAYING' });
})

client.login('ODAwNDQyMjQzNjk3MjEzNDQy.GBV0cJ.6ZHvlyqjJLC4MvTKDzFdLHY0vBlD-GcPbiHBKA');
