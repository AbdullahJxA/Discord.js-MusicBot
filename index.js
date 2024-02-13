const { Client, Collection, MessageEmbed,partials, Interaction } = require("discord.js");
const client = new Client({
    intents:32767,

});
module.exports = client;

client.commands = new Collection();
client.slashCommands = new Collection();
client.events = new Collection()

client.config = require("./config.json") // Can be renamed to whatever you like.

require("./handler")(client)

client.login(client.config.token);
