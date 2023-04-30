const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "skip",
    description: "Add a specfied role to a user",
    aliases: ["sk"],
    inVoiceChannel: true,
    category : "Music",

    run: async (client, message, args) => {
      
        const queue = client.player.getQueue(message)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue to stop.`)
        if (!queue) return message.channel.send({embeds : [e]})

        var eee = new MessageEmbed()
        .setTitle(`Nothing to skip`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing to skip`)
        if(message.member.voice?.channel.id !== message.guild.members.me.voice?.channel.id) return message.channel.send({content : `❌ | You must be in the same voice channel as me to play music.`})

        try {
            queue.skip().catch(error => message.channel.send({embeds : [eee]}))
      
        } catch (e) {
            
            message.channel.send({embeds : [eee]})  
        
    }
    }
}