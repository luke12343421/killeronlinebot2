const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: False});
const lol = new Discord.MessageEmbed()
	.setColor('#0039ff')
	.setTitle('règles')
	.addFields(
		{ name: process.env.name1, value : process.env.value1},
		{ name: process.env.name2, value : process.env.value2},
		{ name: process.env.name3, value : process.env.value3},
    { name: process.env.name4, value : process.env.value4},
    { name: process.env.name5, value : process.env.value5},
    { name : process.env.name6, value : process.env.value6},
	)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('message', msg => {
  if (msg.content === '!! test') {
	  if (message.member.hasPermission("MANAGE_MESSAGES"))
   client.channels.cache.get(process.env.idchannels).send(lol)
	  client.channels.cache.get(process.env.idchannels).send("<everyone>")
  })
});



client.login(process.env.token);
