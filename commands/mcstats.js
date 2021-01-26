module.exports = {
    name: 'mcstats',
    description: 'Gets a servers player profile',
    execute(msg, args, MojangAPI, fetch, Discord){
        if(args[1]) {
            MojangAPI.nameToUuid(args[1], (error, response) =>{
                if(response.length > 0) {
                    MojangAPI.profile(response[0].id, (err, resp) =>{
                        if(args[0] == "hypixel") {
                            fetch('https://api.hypixel.net/player?uuid=' + response[0].id + '&key=c40436a0-db00-4ad6-98ec-8aea2b9e3322')
                                .then(res => res.json())
                                .then(json => {
                                    const hypixelResponse = json;
                                    if(hypixelResponse.player != null) {
                                        var firstLogin = new Date(hypixelResponse.player.firstLogin).toLocaleString()
                                        var lastLogin = new Date(hypixelResponse.player.lastLogin).toLocaleString()
                                        const hypixelEmbed = new Discord.MessageEmbed()
                                        .setColor('#08c945')
                                        .setTitle(resp.name + "'s Hypixel Profile")
                                        .setAuthor('Hypixel', 'https://hypixel.net/favicon-32x32.png')
                                        .setThumbnail('https://crafatar.com/renders/body/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                                        .addFields(
                                            { name: 'First Login', value: firstLogin },
                                            { name: 'Last Online', value: lastLogin },
                                            { name: 'Rank', value: hypixelResponse.player.rank },
                                            { name: 'Current Pet', value: hypixelResponse.player.currentPet },
                                                { name: 'Most Recent Game', value: hypixelResponse.player.mostRecentGameType },
                                            { name: 'Bedwars Wins', value: hypixelResponse.player.achievements.bedwars_wins },
                                            { name: 'Destroyed Bedwars Beds', value: hypixelResponse.player.achievements.bedwars_beds },
                                            { name: 'Bedwars Level', value: hypixelResponse.player.achievements.bedwars_level }
                                        );
                                        msg.channel.send(hypixelEmbed);
                                    } else {
                                        const hypixelEmbed = new Discord.MessageEmbed()
                                        .setColor('#08c945')
                                        .setTitle(resp.name + " hasn't played Hypixel")
                                        msg.channel.send(hypixelEmbed)
                                    }
                                })
                        }
                        if(args[0] == "hive") {
                            fetch('http://api.hivemc.com/v1/player/' + resp.name)
                                .then(res => res.json())
                                .then(json => {
                                    const hiveResponse = json;
                                    var firstLogin = new Date(hiveResponse.firstLogin * 1000).toLocaleString()
                                    var lastLogin = new Date(hiveResponse.lastLogin * 1000).toLocaleString()
                                    const hiveEmbed = new Discord.MessageEmbed()
                                    .setColor('#08c945')
                                    .setTitle(resp.name + "'s Hive Profile")
                                    .setAuthor('Hive', 'https://texture.namemc.com/15/c1/15c18fa2d9638e75.png')
                                    .setThumbnail('https://crafatar.com/renders/body/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                                    .addFields(
                                        { name: 'First Login', value: firstLogin },
                                        { name: 'Last Online', value: lastLogin },
                                        { name: 'Rank', value: hiveResponse.modernRank.human },
                                        { name: 'Tokens', value: hiveResponse.tokens }
                                    );
                                    msg.channel.send(hiveEmbed);
                                })
                        }
                        if(args[0] == "2b2t") {
                            fetch('https://api.2b2t.dev/stats?username=' + resp.name)
                                .then(res => res.json())
                                .then(json => {
                                    const embed = new Discord.MessageEmbed()
                                    .setColor('#08c945')
                                    .setTitle(resp.name + "'s 2b2t Profile")
                                    .setAuthor('2b2t', 'https://api.mcsrvstat.us/icon/2b2t.org')
                                    .setThumbnail('https://crafatar.com/renders/body/' + response[0].id + '.png?rnd=' + Math.random() + '&overlay')
                                    .addFields(
                                        { name: 'Kills', value: json[0].kills },
                                        { name: 'Deaths', value: json[0].deaths },
                                        { name: 'Joins', value: json[0].joins },
                                        { name: 'Leaves', value: json[0].leaves }
                                    );
                                    msg.channel.send(embed);
                                })
                        }
                    })
                } else {
                    const hypixelEmbed = new Discord.MessageEmbed()
                    .setColor('#08c945')
                    .setTitle(args[1] + ' doesnt exist')
                    msg.channel.send(hypixelEmbed)
                }
            })
        } else {
            const hypixelEmbed = new Discord.MessageEmbed()
            .setColor('#08c945')
            .setTitle('Please provide a username')
            msg.channel.send(hypixelEmbed)
        }
    }
}