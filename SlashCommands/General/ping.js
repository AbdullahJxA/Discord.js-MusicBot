const { Client, CommandInteraction, DiscordAPIError , MessageEmbed , MessageButton , MessageCollector ,MessageActionRow , Interaction} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "ping",
    category : "General",
    description: "Bot Latency and uptime",
/**
 * 
 * @param {Interaction} interaction 
 */
    run: async (client, interaction, args) => {
var e = new MessageEmbed()
.setTitle(`pong! 🏓`)
.setColor(`#5241b4`)
.setThumbnail(`https://cdn.discordapp.com/avatars/1002665491590033440/7992c22fb779aad4456c117ec41fbe7c.png`)
.addField(`> Ping (ws):`,`${client.ws.ping}`)
.addField(`> Uptime:`,`${ms(client.uptime)}`)
.setTimestamp()
.setAuthor({name : `${interaction.guild.name}`, iconURL : `${interaction.guild.iconURL({dynamic : true}) || `https://cdn.discordapp.com/avatars/1002665491590033440/7992c22fb779aad4456c117ec41fbe7c.png`}`})
interaction.followUp({embeds : [e]})

    }
}
