module.exports = {
    name: 'mchead',
    description: 'Gets a Minecraft Java head and command for a provided username',
    execute(msg, args, MojangAPI, Discord) {
        if(args[0]) {
            MojangAPI.nameToUuid(args[0], (error, response) =>{
                if(response.length > 0) {
                    MojangAPI.profile(response[0].id, (err, resp) =>{
                        const headEmbed = new Discord.MessageEmbed()
                        .setColor('#08c945')
                        .setAuthor(resp.name, 'https://crafatar.com/avatars/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                        .setTitle(resp.name + "'s Minecraft Head:")
                        .setDescription('```/give @s minecraft:player_head{SkullOwner:"' + resp.name + '"}```')
                        .setImage('https://crafatar.com/renders/head/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                        .setFooter('UUID: ' + response[0].id)
                        msg.channel.send(headEmbed);
                        return;
                    })
                } else {
                    const headEmbed = new Discord.MessageEmbed()
                    .setColor('#08c945')
                    .setTitle(args[0] + ' doesnt exist')
                    msg.channel.send(headEmbed)
                }
            })
        } else {
            const headEmbed = new Discord.MessageEmbed()
            .setColor('#08c945')
            .setTitle('Please provide a username')
            msg.channel.send(headEmbed)
        }
    }
}