const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "skip",
    category : "Music",
    description: "Skip the current song to the next one.",
    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})



        const queue = client.player.getQueue(interaction)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if (!queue) return interaction.followUp({embeds : [e]})
        var eee = new MessageEmbed()
        .setTitle(`Nothing to skip`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing to skip`)
        if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})
        try {
            queue.skip().catch(error => interaction.followUp({embeds : [eee]}))
            var eee1 = new MessageEmbed()
            .setColor(`GREEN`)
            .setDescription(`✅ | Skipped ${queue.songs[0]?.name}`)
            interaction.followUp({embeds : [eee1]})
        } catch (e) {
            
            interaction.followUp({embeds : [eee]})  
        }
    }
}