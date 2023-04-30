const { Client, CommandInteraction, DiscordAPIError , MessageEmbed , MessageButton , MessageCollector ,MessageActionRow , Interaction} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "invite",
    category : "General",
    description: "Invite the bot to other servers",
/**
 * 
 * @param {Interaction} interaction 
 */
    run: async (client, interaction, args) => {
var e = new MessageEmbed()
.setTitle(`Thanks for inviting ${client.user.username}`)
.setColor(`#5241b4`)
.setThumbnail(`https://cdn.discordapp.com/avatars/1002665491590033440/7992c22fb779aad4456c117ec41fbe7c.png`)
.setDescription(`> **Thanks for inviting me 🌹 [Click me](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)**`)
.setTimestamp()
.setAuthor({name : `${interaction.guild.name}`, iconURL : `${interaction.guild.iconURL({dynamic : true}) || `https://cdn.discordapp.com/avatars/1002665491590033440/7992c22fb779aad4456c117ec41fbe7c.png`}`})
interaction.followUp({embeds : [e]})


    }
}
