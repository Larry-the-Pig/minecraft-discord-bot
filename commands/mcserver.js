module.exports = {
    name: 'mcserver',
    description: 'Gets info about a Minecraft Java server',
    execute(msg, args, ping, Discord, imgur){
        imgur.setClientId('a1204bca4aeaf1a');
        
        function convertMcText(text) {
            text = text.split('§');
            var length = text.length;
            for (var i = 1; i < length; i++) {
                text[i] = text[i].substring(1);
            }
            return text.join("");
        }
        if(args[0]) {
            if(!args[1]) {
                var port = 25565;
            }
            else {
                var port = parseInt(args[1]);
            }
            ping(args[0], port, (error, response) => {
                if(response != null) {
                    if(response.favicon.length < 1) {
                        const embed = new Discord.MessageEmbed()
                        .setColor('#08c945')
                        .setTitle('Server Status')
                        .setDescription('```' + convertMcText(response.descriptionText) + '```')
                        .setThumbnail("https://i.imgur.com/RvJGMvB.png")
                        .addFields(
                            { name: 'Minecraft Version', value: response.version },
                            { name: 'Players Online', value: response.onlinePlayers + '/' + response.maxPlayers }
                        );
                        msg.channel.send(embed);
                            return;
                    } 
                    if(response.favicon.length > 1) {
                        imgur.uploadBase64(response.favicon.split(',')[1])
                            .then(function (json) {
                                const embed = new Discord.MessageEmbed()
                                .setColor('#08c945')
                                .setTitle('Server Status')
                                .setDescription('```' + convertMcText(response.descriptionText) + '```')
                                .setThumbnail(json.data.link)
                                .addFields(
                                    { name: 'Minecraft Version', value: response.version },
                                    { name: 'Players Online', value: response.onlinePlayers + '/' + response.maxPlayers }
                                );
                                msg.channel.send(embed);
                                return;
                            });
                    }
                } else {
                    const embed = new Discord.MessageEmbed()
                    .setColor('#08c945')
                    .setTitle("Server Doesn't Exist");
                    msg.channel.send(embed);
                };
            }); 
        } else {
            const embed = new Discord.MessageEmbed()
            .setColor('#08c945')
            .setTitle('Please Enter a Server IP');
            msg.channel.send(embed);
        }
    }
}