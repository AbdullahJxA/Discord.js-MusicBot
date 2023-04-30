const { Client, Collection, MessageEmbed,partials, Interaction } = require("discord.js");
const client = new Client({
    intents:32767,

});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.events = new Collection()
client.config = require("./config.json");

// Initializing the project 
require("./handler")(client);
const { DisTube } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
      const { SoundCloudPlugin } = require("@distube/soundcloud")
const distube = new DisTube(client, {

  leaveOnEmpty: true,
  leaveOnFinish: true,
  leaveOnStop: true,
plugins: [
    new SpotifyPlugin({
        emitEventsAfterFetching: true
    }),
    new SoundCloudPlugin()
]
})

client.player = distube

client.login(client.config.token);
