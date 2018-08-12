const commando = require('discord.js-commando');
class GG extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'goodgirl',
            group: 'silly',
            memberName:'goodgirl',
            description: 'Praises Kanei.',
        });
    }

      async run(msg) {
        var gg = [
            "Ah, thank you, ko!",
            "Thank you, ko!",
            "Ahaha~.",
            "Stop it, you're embarassing me, ko!",
        ];
            
        
            var answer = gg[Math.floor(Math.random()*gg.length)];
            msg.say(answer.toString());
        
    }
    
        
          

}

module.exports = GG;