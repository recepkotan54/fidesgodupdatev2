const { Command } = require('discord.js-commando');
const { RicEmbed } = require('discord.js');

module.exports = class YazCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'yaz',
            group: 'eglence',
            memberName: 'yaz',
            description: 'Isdedinizi Bota Yazdirirsiniz.',
            args: [
                {
                    key: 'yaz',
                    prompt: 'Bota Ne Yazdirmak Isdersiniz?',
                    type: 'string',
                    
                }
            ]
        })
    }
    async run(msg, args) {
        const { yaz } = args;
        const embed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription(yaz)
        .setFooter('Yaz Sistemi')
        return msg.embed(embed)
    }
}
