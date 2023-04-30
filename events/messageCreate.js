var client = require("../index");
client.config = require(`../config.json`)
var { MessageEmbed } = require(`discord.js`);
        client.on("messageCreate", async (message) => {
            if (message.author.bot ||!message.guild ||!message.content.toLowerCase().startsWith(client.config.prefix) && !message.content.toUpperCase().startsWith(client.config.prefix)) return;
    var [cmd, ...args] = message.content.slice(client.config.prefix.length).trim().split(/ +/g)

      var command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()))

    if (!command) return;
        
    if (command.inVoiceChannel && !message.member.voice.channel) {
            
var e = new MessageEmbed()
.setTitle(`Voice channel`)
.setColor(`RED`)
.setDescription(`❌ | Join a voice channel.`)

        return message.channel.send({embeds : [e]})
    }
    await command.run(client, message, args)
})
