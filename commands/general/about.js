const commando = require('discord.js-commando');
class About extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'general',
            memberName:'about',
            description: 'Introductory information concerning Kanei Taasu and her creator/owner: iDraekios.',
        });
    }
    async run(msg) {

        msg.say("Hello, ko! My name is Kanei Taasu, a bot created by iDraekios#1583 on August 11th, 2018. I come with various features, though currently they're all still in development as such don't work quite yet, ko.");
        
        msg.say("If you wish to see a list of my current features, both current and planned, feel free to type ``K!Features``, ko.")

    };
}


module.exports = About;