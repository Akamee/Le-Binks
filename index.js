const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = ("/")
const token = process.env.token;

bot.on("ready", function() { 
    bot.user.setGame("𝙇𝙀 𝘽𝙄𝙉𝙆𝙎™ , /help");
    console.log("Le bot a bien ete connecte");
});

bot.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue Sur Le Serveur Le Binks !"+ member.displayName)
    }).catch(console.error)
})

bot.on('message', msg => {
    if (msg.content === 'Bonjour'){
    msg.reply("Wesh Wesh MEC")
    }
    if (msg.content.match(/salut/i)) {
        msg.reply('Hello!')
    }
    if (msg.content === prefix + "discord" )
        msg.channel.send("https://discord.gg/uTqePt")
        console.log("Une personne a demandé le lien du disord.")
});

bot.on('message', msg => {

  if (message.content.startsWith('/play')) {
       let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    let args = message.content.split(' ')
    voiceChannel
      .join()
      .then(function (connection) {
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }
bot.login(token);
