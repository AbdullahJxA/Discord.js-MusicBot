const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "stop",
    category : "Music",
    description: "Stop the current song.",
    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})



        const queue = client.player.getQueue(interaction)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if (!queue) return interaction.followUp({embeds : [e]})
        if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})
        queue.stop()
        var ee = new MessageEmbed()
        .setTitle(`Stopped the music`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Stopped the music and cleared the queue.`)
        interaction.followUp({embeds : [ee]})

    }
}