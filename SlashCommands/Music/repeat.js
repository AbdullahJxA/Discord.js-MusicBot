const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "repeat",
    category : "Music",
    description: "Repeat the current song / queue",
    inVoiceChannel: true,
    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})

        var queue = client.player.getQueue(interaction)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if (!queue) return interaction.followUp({embeds : [e]})
        const mode = client.player.setRepeatMode(interaction)
        if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})
var ee = new MessageEmbed()
.setTitle(`Repeat mode`)
.setColor(`GREEN`)
.setDescription(`✅ | Repeat mode has been set to \`${mode ? (mode === 2 ? "Repeating queue" : "Repeating this song") : "off"}\``)
interaction.followUp({embeds : [ee]})
    }
}