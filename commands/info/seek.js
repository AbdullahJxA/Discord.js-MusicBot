const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
const Time = require("humanize-ms")
module.exports = {
    name: "seek",
    description: "Add a specfied role to a user",
    category : "Music",

    inVoiceChannel: true,
    run: async (client, message, args) => {
       
        var queue = client.player.getQueue(message)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue to stop.`)
        if (!queue) return message.channel.send({embeds : [e]})
        if(message.member.voice?.channel.id !== message.guild.members.me.voice?.channel.id) return message.channel.send({content : `❌ | You must be in the same voice channel as me to play music.`})

        var volume = args[0]
        var ee = new MessageEmbed()
        .setTitle(`Numbers only`)
        .setColor(`RED`)
        .setDescription(`❌ | Please use numbers only.`)
        
        if (isNaN(volume)) return message.channel.send({embeds : [ee]})
        queue.seek(Time(volume))
        var eee = new MessageEmbed()
        .setTitle(`Seek music`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Seek the current music to ${args[0]}`)
        message.channel.send({embeds : [eee]})
        
    }
}
