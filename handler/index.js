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

distube.on("playSong", (queue, song) => {   
  var button = new MessageActionRow().addComponents(
    new MessageButton()
    .setLabel(`Pause`)
    .setEmoji(`⏸️`)
    .setCustomId(`pause`)
    .setStyle(`SUCCESS`),
    new MessageButton()
    .setLabel(`Resume`)
    .setEmoji(`⏯️`)
    .setCustomId(`resume`)
    .setStyle(`SUCCESS`),
    new MessageButton()
    .setLabel(`Volume +10`)
    .setEmoji(`➕`)
    .setCustomId(`vol+10`)
    .setStyle(`SUCCESS`),
    new MessageButton()
    .setLabel(`Volume -10`)
    .setEmoji(`➖`)
    .setCustomId(`vol-10`)
    .setStyle(`DANGER`),
    new MessageButton()
    .setLabel(`Stop`)
    .setEmoji(`⏹️`)
    .setCustomId(`stop`)
    .setStyle(`DANGER`),); 
    var button2 = new MessageActionRow().addComponents(
      new MessageButton()
      .setLabel(`Repeat`)
      .setEmoji(`🔁`)
      .setCustomId(`repeat`)
      .setStyle(`SUCCESS`),
      ); 
  var embed = new MessageEmbed()
.addField(`> Name:`,`[${song.name}](${song.url})`,true)
.addField(`> Duration:`, `\`${song.formattedDuration}\``,true)
.addField(`> Requested By:`,`${song.member}`)
.setTitle(`${song.name}`)
.setTimestamp()
.setColor(`#5241b4`)
.setThumbnail(`${song.thumbnail}`)
queue.textChannel.send({embeds : [embed], components : [button,button2] })
})


distube.on("addList", (queue, playlist) => {
  var e = new MessageEmbed()
  .setColor(`#5241b4`)
  .setTimestamp()
  .setThumbnail(playlist.thumbnail)
  .setAuthor({name : `${queue.guild.name}`, iconURL : `${queue.guild.iconURL({dynamic : true}) || `https://cdn.discordapp.com/avatars/1002665491590033440/7992c22fb779aad4456c117ec41fbe7c.png`}`})
.setURL(`${playlist.url}`)
  .setTitle(`${playlist.name}`)
  .addFields(
      {
        name : "> Name:",
        value : `${playlist.name}`,
        inline: true
      },
       
           {
        name : "> Length:",
        value : `${playlist.songs.length}`,
        inline: true
      },
      {
       name: '> Mode:',
       value: "Add list",
       inline: true
      },
      
    
          {
          name : "> Requested by:",
        value : `${playlist.user}`,
        inline: true
      }
  )
      queue.textChannel.send({embeds : [e]})
})




 
distube.on("finish", queue =>  { 
      var e = new MessageEmbed()
      .setColor(`GREEN`)
      .setDescription(`✅ | Finished the queue. leaving voice channel...`)
      queue.textChannel.send({embeds : [e]}) 
})
distube.on(`empty`, queue => {
var e = new MessageEmbed()
.setColor(`GREEN`)
.setDescription(`✅ | Leaving the room because its empty...`)
queue.textChannel.send({embeds : [e]})
})
distube.on(`error`, (channel, error) => {
var e = new MessageEmbed()
.setColor(`RED`)
.setDescription(`❌ | Oops we there is an error, try reporting it to the developers team.`)
.setFooter(`${error}`)
.setAuthor({name : `${channel.guild.name}`, iconURL : `${channel.guild.iconURL({dynamic : true}) || `https://cdn.discordapp.com/avatars/1002665491590033440/7992c22fb779aad4456c117ec41fbe7c.png`}`})

channel.send({embeds : [e]})
})
distube.on(`searchNoResult` , (message, query) => {
var e = new MessageEmbed()
.setColor(`RED`)
.setAuthor({name : `${message.guild.name}`, iconURL : `${message.guild.iconURL({dynamic : true}) || `https://cdn.discordapp.com/avatars/1002665491590033440/7992c22fb779aad4456c117ec41fbe7c.png`}`})
.setDescription(`❌ | No result for \`${query}\`.`)
message.channel.send({embeds : [e]})
})
distube.on("initQueue", queue => {
queue.autoplay = false;
queue.volume = 70;  
});







 }
