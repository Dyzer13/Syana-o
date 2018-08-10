const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '--SP';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`--SPhelp`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    if (message.content.startsWith("--SPhelp")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **GOMING SOON **')






.setColor('#24efbd')
message.channel.sendEmbed(embed);
}
});

client.login('NDc3NTc0MTAxMjE3ODM3MDY2.Dk-Iuw.w9HDu4y_M1ayYzEETJVG9OD_hhs'); 
