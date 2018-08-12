const commando = require('discord.js-commando');
class lewd extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lewd',
            group: 'nsfw',
            memberName:'lewd',
            description: "W-Watch what you're touching, ko!",
        });
    }

      async run(msg) {
        var lewd = [
            "Haahn... stop it, ko. It's hard to think when you do that.",
            "So, uhm... are you free later tonight, ko?",
            "W-Watch it! Don't just touch me there so suddenly, ko!",
            "I-I mean... if you really want to.",
            "Nnn... you ready for this?",
            "It's not cheating if we're both wearing socks, ko!",
            "No, I do not *just* want into your pants... I want to wear them... and definitely see what you look like without them.",
        ];
            var answer = lewd[Math.floor(Math.random()*lewd.length)];
            msg.say(answer.toString());
        
    }
    
        
          

}

module.exports = lewd;