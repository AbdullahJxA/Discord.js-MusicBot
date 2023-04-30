const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
const Time = require("humanize-ms")
module.exports = {
    name: "seek",
    category : "Music",
    description: "Seek the current song to a specific time",
options : [{name : "time",description : "The time",required : true,type : `NUMBER`}],
    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})



        var queue = client.player.getQueue(interaction)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if (!queue) return interaction.followUp({embeds : [e]})
        if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})
        var volume = interaction.options.getNumber(`time`)
        var ee = new MessageEmbed()
        .setTitle(`Numbers only`)
        .setColor(`RED`)
        .setDescription(`❌ | Please use numbers only.`)
        
        if (isNaN(volume)) return interaction.followUp({embeds : [ee]})
        queue.seek(Time(volume))
        var eee = new MessageEmbed()
        .setTitle(`Seek music`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Seek the current music to ${args[0]}`)
        interaction.followUp({embeds : [eee]})
    }
}
