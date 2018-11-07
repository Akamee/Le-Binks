const Discord = require("discord.js");
const bot = new Discord.Client();
const cfg = require('./index.json');
const prefix = ("/")

bot.on("ready", function() { 
    bot.user.setGame("Le Binks, .help");
    console.log("Le bot a bien ete connecte");
});

bot.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue Sur Le Serveur Le Binks !"+ member.displayName)
    }).catch(console.error)
})

bot.on('message', msg => {
    if (msg.content === 'Bonjour'){
    msg.reply("Wesh Wesh mec")
    }
    if (msg.content.match(/salut/i)) {
        msg.reply('Hello!')
    }
    if (msg.content === prefix + "discord" )
        msg.channel.send("https://discord.gg/uTqePt")
        console.log("Une personne a demandé le lien du disord.")
});

bot.login(cfg.token);
