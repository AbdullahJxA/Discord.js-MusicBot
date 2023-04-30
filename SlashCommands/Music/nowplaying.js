const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "nowplaying",
    category : "Music",
    description: "See the current song information.",
  
    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})



  var queue = client.player.getQueue(interaction)
  var e = new MessageEmbed()
  .setTitle(`Can't get queue`)
  .setColor(`RED`)
  .setDescription(`❌ | There is nothing in the queue.`)
        if (!queue) return interaction.followUp({embeds : [e]})

       var ee = new MessageEmbed()
       .addFields(
        {
          name : "Song name",
          value : `${client.player.getQueue(interaction).songs[0].name}`,
          inline: true
        },
         
             {
          name : "Song duration",
          value : `${client.player.getQueue(interaction).songs[0].formattedDuration}`,
          inline: true
        },
        
        {
         name: 'Song url',
         value: `[${client.player.getQueue(interaction).songs[0].name}](${client.player.getQueue(interaction).songs[0].url})`,
         inline: true
        },
        {
    name : "Likes",
    value : `${client.player.getQueue(interaction).songs[0].likes}`,
    inline: true
        },
        {
    name : "Views",
    value : `${client.player.getQueue(interaction).songs[0].views}`,
    inline: true
        },
        {
    name : "Dislikes",
    value : `${client.player.getQueue(interaction).songs[0].dislikes}`,
    inline: true
        }
        ,
        {
    name : "Uploader",
    value : `${client.player.getQueue(interaction).songs[0].uploader.name}`,
    inline: true
        }
    )
.setColor(`RANDOM`)
.setThumbnail(`${client.player.getQueue(interaction).songs[0].thumbnail}`)
.setTimestamp()
interaction.followUp({embeds : [ee]})
    }
}
