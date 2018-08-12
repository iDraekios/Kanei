const commando = require('discord.js-commando');
class KatCall extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'katcall',
            group: 'silly',
            memberName:'katcall',
            description: 'Gets a standard response. Used to test if Kanei has crashed or not.',
        });
    }

      async run(msg) {
        msg.say('I can hear you clearly, ko!')
    }
    
        
          

}

module.exports = KatCall;