const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.channels.cache.get('799416495376695396').send({ embed })

});

const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
  .setTitle('chose à faire')
  .setAuthor('raph et luke', 'https://i.imgur.com/wSTFkRM.png')
  .setDescription('')
  .setThumbnail('https://i.imgur.com/wSTFkRM.png')
  .addFields(
    { name: 'les regles', value: '0%' },
    { name: '\u200B', value: '\u200B' },
    { name: 'les informations', value: '0%', inline: true },
    { name: 'les roles', value: '10%', inline: true },
  )
  .addField('&', '&', true)
  .setImage('https://i.imgur.com/wSTFkRM.png')
  .setTimestamp()
  .setFooter('Les choses à faire', 'https://i.imgur.com/wSTFkRM.png');


client.on('message', msg => {
  if (msg.content === '!! ') {

  }
});




client.login('Nzk5MzkzMDEwMzU4MDI2MzAw.YAC6wQ.hVT-3Tzj7wPhdh8haL_Yp3xh9Z0');