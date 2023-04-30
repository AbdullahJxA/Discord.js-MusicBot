const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "volume",
    description: "Add a specfied role to a user",
    inVoiceChannel: true,
    category : "Music",

    run: async (client, message, args) => {
      
        var queue = client.player.getQueue(message)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue to stop.`)
        if (!queue) return message.channel.send({embeds : [e]})
        if(message.member.voice?.channel.id !== message.guild.members.me.voice?.channel.id) return message.channel.send({content : `❌ | You must be in the same voice channel as me to play music.`})
        var volume = parseInt(args[0])
        var ee = new MessageEmbed()
        .setTitle(`Numbers only`)
        .setColor(`RED`)
        .setDescription(`❌ | Please use numbers only. And enter a number from 1 to 100`)
        if (isNaN(volume)  || 100 < args[0] || args[0] <= 0) return message.channel.send({embeds : [ee]})
        queue.setVolume(volume)
        var eee = new MessageEmbed()
        .setTitle(`Volume set`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Volume has been set to ${args[0]}`)
        message.channel.send({embeds : [eee]})
                        
    }
}