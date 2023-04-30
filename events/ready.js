var client = require("../index")
client.on("ready", () => {
console.log(`I'm all up and ready to go! don't forget to put a star please! (https://github.com/TTheDevJxA/Discord.js-MusicBot)`)
client.user.setActivity(`github.com/TTheDevJxA/Discord.js-MusicBot`,{type : `WATCHING`})
client.user.setStatus(`dnd`)
})
