const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "play",
    category : "Music",
    description: "Play a song by its name or url from youtube or spotify or soundcloud",
    options : [
        {
name : "query",
description : "Name or url for the song (it can be from soundcloud or spotify or youtube)",
required : true,
type : "STRING"

        }
    ],
    run: async (client, interaction, args) => {  
if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})
interaction.followUp({content : "Started."})
var search = interaction.options.getString(`query`)
client.player.play(interaction.member.voice?.channel, search, {
    member: interaction.member,
    textChannel: interaction.channel,
    interaction
})
if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})

    }
}
