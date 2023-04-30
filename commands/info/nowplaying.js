const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "nowplaying",
    description: "Add a specfied role to a user",
    inVoiceChannel: true,
    category : "Music",

    run: async (client, message, args) => {

  var queue = client.player.getQueue(message)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue to.`)
        if (!queue) return message.channel.send({embeds : [e]})

       var ee = new MessageEmbed()
  .addFields(
    {
      name : "Song name",
      value : `${client.player.getQueue(message).songs[0].name}`,
      inline: true
    },
     
         {
      name : "Song duration",
      value : `${client.player.getQueue(message).songs[0].formattedDuration}`,
      inline: true
    },
    
    {
     name: 'Song url',
     value: `[${client.player.getQueue(message).songs[0].name}](${client.player.getQueue(message).songs[0].url})`,
     inline: true
    },
    {
name : "Likes",
value : `${client.player.getQueue(message).songs[0].likes}`,
inline: true
    },
    {
name : "Views",
value : `${client.player.getQueue(message).songs[0].views}`,
inline: true
    },
    {
name : "Dislikes",
value : `${client.player.getQueue(message).songs[0].dislikes}`,
inline: true
    }
    ,
    {
name : "Uploader",
value : `${client.player.getQueue(message).songs[0].uploader.name}`,
inline: true
    }
)
.setColor(`RANDOM`)
.setThumbnail(`${client.player.getQueue(message).songs[0].thumbnail}`)
.setTimestamp()
message.channel.send({embeds : [ee]})
        
    }
}
