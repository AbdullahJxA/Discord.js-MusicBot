const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "volume",
    category : "Music",
    description: "Control the current music volume.",
    options : [{
        name : "volume",
        description : "The volume",
        required : true,
        type : "STRING",
        choices : [{name : "10",value : "10",},{name : "20",value : "20"},{name : "30",value : "30"},{name : "40",value : "40"},{name : "50",value : "50"},{name : "60",value : "60"}
        ,{name : "70",value : "70"},{name : "80",value : "80"} , {name : "90",value : "90"},{name : "100",value : "100"}
        ]
    }],
    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})

      


        var queue = client.player.getQueue(interaction)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if (!queue) return interaction.followUp({embeds : [e]})
        var volume = interaction.options.getString(`volume`)
        if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})
if(volume === "10") {
    queue.setVolume(parseInt(10))
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 10`)
    interaction.followUp({embeds : [eee]})
} 
if(volume === "20") {
    queue.setVolume(20)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 20`)
    interaction.followUp({embeds : [eee]})
}
if(volume === "30") {
    queue.setVolume(30)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 30`)
    interaction.followUp({embeds : [eee]})
}
if(volume === "40") {
    queue.setVolume(40)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 40`)
    interaction.followUp({embeds : [eee]})
}
if(volume === "50") {
    queue.setVolume(50)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 50`)
    interaction.followUp({embeds : [eee]})
}
if(volume === "60") {
    queue.setVolume(60)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 60`)
    interaction.followUp({embeds : [eee]})
}
if(volume === "70") {
    queue.setVolume(70)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 70`)
    interaction.followUp({embeds : [eee]})
}
if(volume === "80") {
    queue.setVolume(20)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 80`)
    interaction.followUp({embeds : [eee]})
}
if(volume === "90") {
    queue.setVolume(90)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 90`)
    interaction.followUp({embeds : [eee]})
}
if(volume === "100") {
    queue.setVolume(100)
    var eee = new MessageEmbed()
    .setTitle(`Volume set`)
    .setColor(`GREEN`)
    .setDescription(`✅ | Volume has been set to 100`)
    interaction.followUp({embeds : [eee]})
}

        /*
        var volume = parseInt(args[0])
        var ee = new MessageEmbed()
        .setTitle(`Numbers only`)
        .setColor(`RED`)
        .setDescription(`❌ | Please use numbers only. And enter a number from 1 to 100`)
        if (isNaN(volume)  || 100 < args[0] || args[0] <= 0) return interaction.followUp({embeds : [ee]})
        */

    }
}