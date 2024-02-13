const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "filter",
    category : "Music",
    description: "Select a filter to add to the current song.",
    options : [{
        name : "filter",
        description : "The filter",
        required : true,
        type : "STRING",
        choices : [{name : "none",value : "none"},{name : "bassboost",value : "bassboost",},{name : "3d",value : "3d"},{name : "echo",value : "echo"},{name : "karaoke",value : "karaoke"},{name : "nightcore",value : "nightcore"},{name : "vaporwave",value : "vaporwave"}
        ,{name : "reverse",value : "reverse"},{name : "gate",value : "gate"} , {name : "flanger",value : "flanger"}
        ]
    }],
   
    run: async (client, interaction, args) => {
        if(!interaction.member.voice?.channel) return interaction.followUp({content : `❌ | Join a voice channel.`})
 // Available filters : bassboost , 3d , echo , karaoke , nightcore , vaporwave , reverse , gate , flanger  
        var queue = client.player.getQueue(interaction)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue.`)
        if(!queue) return interaction.followUp({embeds : [e]})
        if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.followUp({content : `❌ | You must be in the same voice channel as me to play music.`})
var s = interaction.options.getString(`filter`)
if(s===`bassboost`) {
    queue.setFilter(`bassboost`)
    var eee = new MessageEmbed()
    .setTitle(`Set the filters.`)
    .setColor(`GREEN`)
    .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
 if(s===`3d`) {
    queue.setFilter(`3d`)
    var eee = new MessageEmbed()
    .setTitle(`Set the filters.`)
    .setColor(`GREEN`)
    .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
if(s===`echo`) {
    queue.setFilter(`echo`)
    var eee = new MessageEmbed()
        .setTitle(`Set the filters.`)
        .setColor(`GREEN`)
        .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
if(s===`karaoke`) {
    queue.setFilter(`karaoke`)
    var eee = new MessageEmbed()
        .setTitle(`Set the filters.`)
        .setColor(`GREEN`)
        .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
if(s===`nightcore`) {
    var eee = new MessageEmbed()
    .setTitle(`Set the filters.`)
    .setColor(`GREEN`)
    .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
if(s===`vaporwave`) {
    queue.setFilter(`vaporwave`)
    var eee = new MessageEmbed()
        .setTitle(`Set the filters.`)
        .setColor(`GREEN`)
        .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
if(s===`reverse`) {
    queue.setFilter(`reverse`)
    var eee = new MessageEmbed()
    .setTitle(`Set the filters.`)
    .setColor(`GREEN`)
    .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
if(s===`gate`) {
    queue.setFilter(`gate`)
    var eee = new MessageEmbed()
    .setTitle(`Set the filters.`)
    .setColor(`GREEN`)
    .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
if(s===`flanger`) {
    queue.setFilter(`flanger`)
    var eee = new MessageEmbed()
    .setTitle(`Set the filters.`)
    .setColor(`GREEN`)
    .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}
if(s === `none`) {
    queue.setFilter(false)
    var eee = new MessageEmbed()
        .setTitle(`Set the filters.`)
        .setColor(`GREEN`)
        .setDescription(`**The current filters are** \`\`\`${queue.filters.join(` `) || `None`}\`\`\``)
        interaction.followUp({embeds : [eee]})
}

    }
}
