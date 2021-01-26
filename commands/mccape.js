module.exports = {
    name: 'mccape',
    description: 'Gives you the texture for a usernames OptiFine or Minecraft cape',
    execute(msg, args, MojangAPI, Discord, fetch){
        if(args[0]) {
            MojangAPI.nameToUuid(args[0], (error, response) =>{
                if(response.length > 0) {
                    MojangAPI.profile(response[0].id, (err, resp) =>{
                        fetch('http://s.optifine.net/capes/' + resp.name + '.png')
                            .then(res => res.text())
                            .then(body => {
                                if(body == "<html>\n<body>\nNot found\n</body>\n</html>") {
                                    fetch("https://crafatar.com/capes/" + response[0].id)
                                        .then(res => res.text())
                                        .then(body => {
                                            if(body == "") {
                                                const capeEmbed = new Discord.MessageEmbed()
                                                .setColor('#08c945')
                                                .setTitle(resp.name + " doesn't have any cape")
                                                msg.channel.send(capeEmbed)
                                                return;
                                            } else {
                                                const capeEmbed = new Discord.MessageEmbed()
                                                .setColor('#08c945')
                                                .setAuthor(resp.name, 'https://crafatar.com/avatars/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                                                .setTitle(resp.name + "'s Minecraft Cape")
                                                .setImage('https://crafatar.com/capes/' + response[0].id + '.png?rnd=' + Math.random())
                                                .setFooter('UUID: ' + response[0].id)
                                                msg.channel.send(capeEmbed);
                                                return;
                                            }
                                        })
                                } else {
                                    const capeEmbed = new Discord.MessageEmbed()
                                    .setColor('#08c945')
                                    .setAuthor(resp.name, 'https://crafatar.com/avatars/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                                    .setTitle(resp.name + "'s OptiFine Cape")
                                    .setImage('http://s.optifine.net/capes/' + resp.name + '.png')
                                    .setFooter('UUID: ' + response[0].id)
                                    msg.channel.send(capeEmbed);
                                    return;
                                }
                            })
                    })
                    
                } else {
                    const capeEmbed = new Discord.MessageEmbed()
                    .setColor('#08c945')
                    .setTitle(args[0] + " doesn't exist")
                    msg.channel.send(capeEmbed)
                }
            })
        } else {
            const capeEmbed = new Discord.MessageEmbed()
            .setColor('#08c945')
            .setTitle('Please provide a username')
            msg.channel.send(capeEmbed)
        }
    }
}