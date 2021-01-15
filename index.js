const Discord = require('discord.js');
const client = new Discord.Client();
const lol = new Discord.MessageEmbed()
	.setColor('#0039ff')
	.setTitle('règles')
	.addFields(
		{ name: "1 règles", value : process.env.value1},
		{ name: "2 règles", value : process.env.value2},
		{ name: "3 règles", value : process.env.value3},
    { name: "4 règles", value : process.env.value4},
    { name: "5 règles", value : process.env.value5},
    { name : "Mercie de bien lire et respecter ses **règles**", value : process.env.value6},
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
