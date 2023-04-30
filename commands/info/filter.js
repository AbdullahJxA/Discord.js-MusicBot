const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "filter",
    description: "Add a specfied role to a user",
    category : "Music",
    inVoiceChannel: true,
    run: async (client, message, args) => {
   
        var queue = client.player.getQueue(message)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if(message.member.voice?.channel.id !== message.guild.members.me.voice?.channel.id) return message.channel.send({content : `❌ | You must be in the same voice channel as me to play music.`})

        var ee = new MessageEmbed()
        .setTitle(`Can't find this filter.`)
        .setColor(`RED`)
        .setDescription(`❌ | I can't find this filter.`)
        if (!queue) return message.channel.send({embeds : [e]})
       if (args[0] === "off" && queue.filters?.length) queue.setFilter(false)
        else if (Object.keys(client.player.filters).includes(args[0])) queue.setFilter(args[0])
        else if (args[0]) return message.channel.send({embeds : [ee]})
      
         var eee = new MessageEmbed()
        .setColor(`GREEN`)
        .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
      
      message.channel.send({embeds : [eee]})
      
    }
}
