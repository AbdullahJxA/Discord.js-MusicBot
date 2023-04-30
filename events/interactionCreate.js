const client = require("../index");
var {MessageActionRow , MessageButton , MessageEmbed, Collection, ButtonInteraction} = require(`discord.js`)
client.on("interactionCreate", async (interaction) => {
    if (interaction.isCommand()) {
       await interaction.deferReply({ ephemeral: false }).catch(() => {})
        const cmd = client.slashCommands.get(interaction.commandName)
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " })

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name)
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value)
                })
            } else if (option.value) args.push(option.value)
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id)
    
        cmd.run(client, interaction, args)
    }

if(interaction.isButton()) {


if(interaction.customId === `pause`) {
    if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.reply({content : `❌ | You must be in the same voice channel as me to play music.`,ephemeral : true})
  
    var queue = client.player.getQueue(interaction)
    if(!interaction.member.voice?.channel) return interaction.reply({content : `❌ | Join a voice channel.`,ephemeral : true})
    if (!queue) return interaction.reply({content : `❌ | There is nothing in the queue`,ephemeral : true})
client.player.getQueue(interaction).pause()
interaction.reply({content : `⏸️ | Paused Current Music`,ephemeral : true})  
}
if(interaction.customId === `resume`) {
    if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.reply({content : `❌ | You must be in the same voice channel as me to play music.`,ephemeral : true})

    var queue = client.player.getQueue(interaction)
    if(!interaction.member.voice?.channel) return interaction.reply({content : `❌ | Join a voice channel.`,ephemeral : true})
    if (!queue) return interaction.reply({content : `❌ | There is nothing in the queue`,ephemeral : true})
    client.player.getQueue(interaction).resume()
    interaction.reply({content : `⏯️ | Resumed Current Music`,ephemeral : true})
}
if(interaction.customId === `stop`) {
    if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.reply({content : `❌ | You must be in the same voice channel as me to play music.`,ephemeral : true})

    var queue = client.player.getQueue(interaction)
    if(!interaction.member.voice?.channel) return interaction.reply({content : `❌ | Join a voice channel.`,ephemeral : true})
    if (!queue) return interaction.reply({content : `❌ | There is nothing in the queue`,ephemeral : true})
    client.player.getQueue(interaction).stop()
    interaction.reply({content : `⏯️ | Stopped Current Music`,ephemeral : true})
}
if(interaction.customId === `vol+10`) {
    if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.reply({content : `❌ | You must be in the same voice channel as me to play music.`,ephemeral : true})

    var queue = client.player.getQueue(interaction)
    if(!interaction.member.voice?.channel) return interaction.reply({content : `❌ | Join a voice channel.`,ephemeral : true})
          if (!queue) return interaction.reply({content : `❌ | There is nothing in the queue`,ephemeral : true})
          if(queue.volume === 100) return interaction.reply({content : `❌ | You can't set the volume more than 100%`,ephemeral : true})

    queue.setVolume(queue.volume + 10)
    interaction.reply({content : `🔊 | Volume is up by 10%`,ephemeral : true})
}
if(interaction.customId === `vol-10`) {
    if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.reply({content : `❌ | You must be in the same voice channel as me to play music.`,ephemeral : true})

    var queue = client.player.getQueue(interaction)
    if(!interaction.member.voice?.channel) return interaction.reply({content : `❌ | Join a voice channel.`,ephemeral : true})
    if (!queue) return interaction.reply({content : `❌ | There is nothing in the queue`,ephemeral : true})
    if(queue.volume === 10) return interaction.reply({content : `❌ | You can't set the volume less than 10%`,ephemeral : true})
    queue.setVolume(queue.volume - 10)
    interaction.reply({content : `🔉 | Volume is down by 10%`,ephemeral : true})
}
if(interaction.customId === `repeat`) {
    if(interaction.member.voice?.channel.id !== interaction.guild.members.me.voice?.channel.id) return interaction.reply({content : `❌ | You must be in the same voice channel as me to play music.`,ephemeral : true})

    var queue = client.player.getQueue(interaction)
    if(!interaction.member.voice?.channel) return interaction.reply({content : `❌ | Join a voice channel.`,ephemeral : true})
          if (!queue) return interaction.reply({content : `❌ | There is nothing in the queue`,ephemeral : true})
    var mode = client.player.setRepeatMode(interaction)
  
    interaction.reply({content : `🔁 | ${mode ? (mode === 2 ? "Repeating queue" : "Repeating this song") : "off"}`,ephemeral : true})
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}




   
})