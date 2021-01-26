module.exports = {
    name: 'mcskin',
    description: 'Gets a Minecraft Java skin for a provided username',
    execute(msg, args, MojangAPI, Discord){
        if(args[0]) {
            MojangAPI.nameToUuid(args[0], (error, response) =>{
                if(response.length > 0) {
                    MojangAPI.profile(response[0].id, (err, resp) =>{
                        const skinEmbed = new Discord.MessageEmbed()
                        .setColor('#08c945')
                        .setAuthor(resp.name, 'https://crafatar.com/avatars/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                        .setThumbnail('https://crafatar.com/skins/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                        .setFooter('UUID: ' + response[0].id)
                        .setTitle(resp.name + "'s Minecraft Skin")
                        .setImage('https://crafatar.com/renders/body/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                        msg.channel.send(skinEmbed);
                        return;
                    })
                } else {
                    const skinEmbed = new Discord.MessageEmbed()
                    .setColor('#08c945')
                    .setTitle(args[0] + ' doesnt exist')
                    msg.channel.send(skinEmbed)
                }
            })
        } else {
            const skinEmbed = new Discord.MessageEmbed()
            .setColor('#08c945')
            .setTitle('Please provide a username')
            msg.channel.send(skinEmbed)
        }
    }
}