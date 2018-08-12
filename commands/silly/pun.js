const commando = require('discord.js-commando');
class PunCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'pun',
            group: 'silly',
            memberName:'pun',
            description: 'Provides a pun.',
        });
    }

      async run(msg) {
        var pun = [
            'I was going to make myself a belt made out of watches, but then I realized it would be a waist of time.',
            'The past, the present, and the future walk into a bar… It was tense.',
            'I started a company selling land mines disguised as prayer mats. Prophets are going through the roof.',
            'Last night, I dreamed I was swimming in an ocean of orange soda. But it was just a Fanta sea.',
            'Did you hear about the man who was accidentally buried alive?  It was a grave mistake.',
            'Having sex in an elevator is wrong on so many levels.',
        ];
            var answer = pun[Math.floor(Math.random()*pun.length)];
            msg.say(answer.toString());
        
    }
    
        
          

}

module.exports = PunCommand;