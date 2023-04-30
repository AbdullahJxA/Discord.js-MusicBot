const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "play",
    description: "Add a specfied role to a user",
    aliases: ["p"],
    inVoiceChannel: true,
    category : "Music",

    run: async (client, message, args) => {
     
var search = args.join(` `)
var e = new MessageEmbed()
.setColor(`RED`)
.setTitle(`What to play`)
.setDescription(`❌ | Type what you want to play.`)
if(!search) return message.channel.send({embeds : [e]})
client.player.play(message.member.voice.channel, search, {
    member: message.member,
    textChannel: message.channel,
    message
})
if(message.member.voice?.channel.id !== message.guild.members.me.voice?.channel.id) return message.channel.send({content : `❌ | You must be in the same voice channel as me to play music.`})
      
    }
}
