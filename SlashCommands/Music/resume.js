const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "resume",
    category : "Music",
    description: "Resume the current song. (if it was stopped)",

    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})



        var queue = client.player.getQueue(interaction)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if (!queue) return interaction.followUp({embeds : [e]})
        if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})
     queue.resume()
 var ee = new MessageEmbed()
        .setTitle(`Resumed music`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Resumed the music.`)
        interaction.followUp({embeds : [ee]})
    }
}
