const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "previous",
    category : "Music",
    description: "Play the previous song in the queue",
    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})



        var queue = client.player.getQueue(interaction)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if (!queue) return interaction.followUp({embeds : [e]})
        if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})
  queue.previous().catch(error => interaction.followUp({embeds : [new MessageEmbed().setTitle(`There is no previous song`).setDescription(`There isn't a previous song.`).setColor(`RED`)]}))
 var ee = new MessageEmbed()
        .setTitle(`Playing previous song`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Play previous song.`)
        interaction.followUp({embeds : [ee]})
    }
}