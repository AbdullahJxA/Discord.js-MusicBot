const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "previous",
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

 queue.previous().catch(error => message.channel.send({embeds : [new MessageEmbed().setTitle(`There is no previous song`).setDescription(`There isn't a previous song.`).setColor(`RED`)]}))
 var ee = new MessageEmbed()
        .setTitle(`Playing previous song`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Play previous song.`)
 message.channel.send({embeds : [ee]})
        
    }
}
