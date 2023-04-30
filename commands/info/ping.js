const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var c = require(`../../config.json`)
var ms = require(`ms`)
module.exports = {
    name: "ping",
    description: "Add a specfied role to a user",
    category : "General",

    run: async (client, message, args) => {

var e = new MessageEmbed()
.setTitle(`Pong! 🏓`)
.addField(`Ping : `,`\`\`\`${ms(client.ws.ping)}\`\`\``,true)
.addField(`Uptime : `,`\`\`\`${ms(client.uptime)}\`\`\``)
.setThumbnail(`${message.member.displayAvatarURL({dynamic : true, size : 1024})}`)
.setTimestamp()
.setColor(`RANDOM`)
message.channel.send({embeds : [e]})
        
    }
}
