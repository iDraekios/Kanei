const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const newUsers = new Discord.Collection();
const bot = new Commando.Client({
    commandPrefix: 'K!',
    owner: '136657810728550400',
    disableEveryone: true
});

bot.registry.registerDefaults();
bot.registry.registerGroup('silly', 'Silly');
bot.registry.registerGroup('general', 'General');
bot.registry.registerGroup('nsfw', 'NSFW');
bot.registry.registerCommandsIn(__dirname + "/commands")


bot.on('ready', () => {
    console.log('Reporting in, ko!');
    bot.user.setActivity('New ways to annoy my owner.');

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('477747758686797824').send(`Welcome to the server, ${member}! Have a nice stay, ko!`);
  });
  bot.on('guildMemberRemove', member => {
    member.guild.channels.get('477747758686797824').send(`${member} left the server. Bye bye, ko!`);
  });
  
    bot.on("error", (e) => console.error(e));
    bot.on("warn", (e) => console.warn(e));
    bot.on("debug", (e) => console.info(e));

});

    bot.login('FoolMeOnce-ShameOnYou');

