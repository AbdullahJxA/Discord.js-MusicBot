const { glob } = require("glob");
const { promisify } = require("util");
const { Client , MessageEmbed, MessageActionRow , MessageButton, Interaction } = require("discord.js");
const { intersection } = require("lodash");
const { setTimeout, setInterval } = require("timers/promises");
var client = new Client({ intents: 32767})

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */


 module.exports = async (client) => {

  const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
  commandFiles.map((value) => {
      const file = require(value);
      const splitted = value.split("/");
      const directory = splitted[splitted.length - 2];

      if (file.name) {
          const properties = { directory, ...file };
          client.commands.set(file.name, properties);
      }
  });


    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`)
    eventFiles.map((value) => require(value))

    const slashCommands = await globPromise(`${process.cwd()}/SlashCommands/*/*.js`)
    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value)
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);
        if (["MESSAGE", "USER"].includes(file.type)) delete file.description
 
        arrayOfSlashCommands.push(file)
    })



client.on(`ready`, () => {
  client.guilds.cache.get(`1087411867770699897`).commands.set(arrayOfSlashCommands)//for single guild but for all use client.application.commands.set(arrayOfSlashCommands)
})

const { DisTube } = require("distube")
const { SpotifyPlugin } = require("@distube/spotify")
      const { SoundCloudPlugin } = require("@distube/soundcloud")
      const { YtDlpPlugin } = require('@distube/yt-dlp')
/*
optional : 
to play music from spotify and soundcloud add this to line 67 :
    new SoundCloudPlugin(),
    new YtDlpPlugin()
*/
const distube = new DisTube(client, {

  leaveOnEmpty: true,
  leaveOnFinish: true,
  leaveOnStop: true,
plugins: [
    new SpotifyPlugin({
        emitEventsAfterFetching: true
    }),


]
})

client.player = distube
//Better version of the song events.
distube.on("playSong", (queue, song) => {   
queue.textChannel.send({content : `Started playing \`${song.name}\`. \n Requested by : ${song.user} | Volume : \`${queue.volume}%\` | Length : \`${song.formattedDuration}\``})
})
distube.on("addSong", (queue, song) => {
var m = queue.textChannel.send({content : `Added \`${song.name}\` to the queue. \n Requested by : ${song.user} | Volume : \`${queue.volume}%\` | Length : \`${song.formattedDuration}\``})
setInterval(() => {
  m.delete()
}, 5000)
 })
distube.on("finish", queue =>  { 
      queue.textChannel.send({content : `✅ | Finished the queue.`}) 
})
distube.on(`empty`, queue => {
queue.textChannel.send({content : `✅ | Leaving the room because its empty...`})
})
distube.on(`error`, (channel, error) => {
var e = new MessageEmbed()
.setColor(`RED`)
.setDescription(`❌ | Oops we there is an error, try reporting it to jxa.`)
.setFooter(`${error}`)
channel.send({embeds : [e]})
})
distube.on(`searchNoResult` , (message, query) => {
message.channel.send({content : `❌ | There is no such song.`})
})
distube.on("initQueue", queue => {
queue.autoplay = false;
queue.volume = 70;  
});

 }
