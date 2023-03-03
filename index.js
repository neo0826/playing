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
    client.user.setActivity(`Clown Dev Team✨`,{ type: 'PLAYING' });
})

client.login('MTA0MDM2MDg3OTc2NzY5MTI2NA.GHozEo.qpD871mhwGy4N-cw7z1ZFzIZFc9kqHCVKOZ9vc');
