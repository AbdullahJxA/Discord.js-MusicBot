const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "resume",
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

     queue.resume()
 var ee = new MessageEmbed()
        .setTitle(`Resumed music`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Resumed the music.`)
 message.channel.send({embeds : [ee]})
        
    }
}
