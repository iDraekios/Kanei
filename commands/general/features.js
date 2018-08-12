const commando = require('discord.js-commando');
class features extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'features',
            group: 'general',
            memberName:'features',
            description: 'Overview of bot functions',
        });
    }
    async run(msg) {

        msg.say("Received loud and clear, ko! My current features are as follows, planned ones are a much longer list, so they'll be here later.:");
        msg.say("+ I can make jokes");


        msg.say("It isn't much, but I'm always learning new things, ko! Check in later, and maybe I'll have a new trick!")
        

    };
}

module.exports = features