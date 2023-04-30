const { inspect } = require('util');
const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var config = require(`../../config.json`)
module.exports = {
    name: "restart",
    category : "Developer",
    description: "Restart the bot.",
    run: async (client, interaction, args) => {
        if (!config.owner.includes(interaction.user.id)) {
            var e = new MessageEmbed()
            .setColor(`RED`)
            .setDescription(`> ❌ | Forbeddin action!`)
            .setFooter(`Sent from ${interaction.guild.name}`)
            interaction.member.send({embeds : [e]}).catch(error =>     console.log(`${interaction.user.tag} tried to use a forbeddin command! and his dm is closed!!!!`))
        } else {
        interaction.followUp({content : `Restarting in 5s...`})
        setTimeout(() => {
            process.exit(0)
        }, 7000);
    }



}
}
