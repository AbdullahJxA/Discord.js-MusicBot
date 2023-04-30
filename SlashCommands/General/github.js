var { MessageEmbed } = require("discord.js")
module.exports = {
    name: "github",
    description: "Official bot page on github",
    category : "General",
    run: async (client, interaction, args) => {
var e = new MessageEmbed()
.setTitle(`GitHub`)
.setURL(`https://github.com/TTheDevJxA/Discord.js-MusicBot`)
.setDescription(`**[Discord.js-MusicBot](https://github.com/TTheDevJxA/Discord.js-MusicBot)**`)
.setColor(`#5241b4`)
.setAuthor({name : `${interaction.guild.name}`, iconURL : `${interaction.guild.iconURL({dynamic : true}) || `https://cdn.discordapp.com/avatars/1002665491590033440/7992c22fb779aad4456c117ec41fbe7c.png`}`}) 
interaction.followUp({embeds : [e]})
}
}