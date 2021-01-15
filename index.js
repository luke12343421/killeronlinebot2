const Discord = require('discord.js');
const client = new Discord.Client();
const lol = new Discord.MessageEmbed()
	.setColor('#0039ff')
	.setTitle('règles')
	.addFields(
		{ name: "1 règles", value : "Vous devez obligatoirement respecter les **terms of Services** (Tos) de Discord. https:/discord.Com/terms"},
		{ name: "2 règles", value : "Aucune **insulte** ne sera tolérée, être **respectueux** avec le staff et le membre de la communauté."},
		{ name: "3 règles", value : "toute sorte de pub (Youtube, Twitch, Discord etc.) sera **sanctionner** d'un avertissement."},
    { name: "4 règles", value : 'toute sorte de spam est **interdit**. '},
    { name: "5 règles", value : "Aucun contenu inapproprié (**drogue, suicide, pornographie** etch...). "},
    { name : "Mercie de bien lire et respecter ses **règles**", value : "Ils peuvent changer lisez-les **régulièrement**."},
	)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', msg => {
  if (msg.content === '!! test') {
   client.channels.cache.get('778838813333389312').send(lol)
  }
});




client.login(process.env.token);
