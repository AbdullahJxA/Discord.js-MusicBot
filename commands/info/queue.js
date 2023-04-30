const { Client, CommandInteraction, DiscordAPIError , MessageEmbed , MessageButton , MessageActionRow} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "queue",
    description: "Add a specfied role to a user",
    inVoiceChannel: true,
        category : "Music",

    run: async (client, message, args) => {
     
var queue = client.player.getQueue(message)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue to stop.`)
        if(message.member.voice?.channel.id !== message.guild.members.me.voice?.channel.id) return message.channel.send({content : `❌ | You must be in the same voice channel as me to play music.`})

        if (!queue) return message.channel.send({embeds : [e]})
        var q1 = queue.songs.map((song, id) =>
        `**\`${id + 1}\`. ${song.name}** - \`${song.formattedDuration}\``
    ).slice(0, 10).join("\n")
    var q2 = queue.songs.map((song, id) =>
            `**\`${id + 1}\`. ${song.name}** - \`${song.formattedDuration}\``
        ).slice(10, 20).join("\n")
        var q3 = queue.songs.map((song, id) =>
        `**\`${id + 1}\`. ${song.name}** - \`${song.formattedDuration}\``
    ).slice(20, 35).join("\n")

        var lool = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel(`Previous Page`)
            .setCustomId(`pre`)
            .setEmoji(`⏮️`)
            .setDisabled(true)
            .setStyle(`SUCCESS`),
            new MessageButton()
        .setLabel(`Next Page`)
        .setCustomId(`next`)
        .setEmoji(`⏭️`)
        .setStyle(`SUCCESS`),  
        new MessageButton()
        .setLabel(`Delete This Message`)
        .setCustomId(`del`)
        .setEmoji(`❌`)
        .setStyle(`DANGER`),
          );  
          var lool2 = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel(`Previous Page`)
            .setCustomId(`pre`)
            .setEmoji(`⏮️`)
            .setDisabled(false)
            .setStyle(`SUCCESS`),
            new MessageButton()
            .setLabel(`Delete This Message`)
            .setCustomId(`del`)
            .setEmoji(`❌`)
            .setStyle(`DANGER`),
            new MessageButton()
        .setLabel(`Next Page`)
        .setCustomId(`next1`)
        .setEmoji(`⏭️`)
        .setStyle(`SUCCESS`),  
       
          ); 
          var lool3 = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel(`Previous Page`)
            .setCustomId(`pre1`)
            .setEmoji(`⏮️`)
            .setDisabled(false)
            .setStyle(`SUCCESS`),
            new MessageButton()
            .setLabel(`Delete This Message`)
            .setCustomId(`del`)
            .setEmoji(`❌`)
            .setStyle(`DANGER`),
            new MessageButton()
        .setLabel(`Next Page`)
.setCustomId(`123`)
        .setEmoji(`⏭️`)
        .setDisabled(true)
        .setStyle(`SUCCESS`),  
       
          ); 
var e = new MessageEmbed()
.setColor(`RANDOM`)
.setDescription(`${q1}`)
.setTimestamp()
 message.channel.send({embeds : [e], components : [lool]}).then(m => {
const filter = i => i.customId === `next` ||  i.customId === `pre` || i.customId === `pre1` || i.customId === `next1` || i.customId === `del`  && i.user.id === message.member.id
const collector = message.channel.createMessageComponentCollector({ filter, time: 50000 })

collector.on('collect', async i => {
       i.deferUpdate()
    if (i.customId === `next`) {
       m.edit({embeds : [new MessageEmbed().setDescription(`${q2}`).setColor(`RANDOM`).setTimestamp()], components : [lool2]})
    }
    if (i.customId === `pre`) {
        m.edit({embeds : [new MessageEmbed().setDescription(`${q1}`).setColor(`RANDOM`).setTimestamp()], components : [lool]})
     }
     if (i.customId === `pre1`) {
        m.edit({embeds : [new MessageEmbed().setDescription(`${q2}`).setColor(`RANDOM`).setTimestamp()], components : [lool3]})
     }
     if (i.customId === `next1`) {
        m.edit({embeds : [new MessageEmbed().setDescription(`${q3}`).setColor(`RANDOM`).setTimestamp()], components : [lool3]})
     }
     if (i.customId === `del`) {
        m.delete()
     }
})
 })
    }
}
