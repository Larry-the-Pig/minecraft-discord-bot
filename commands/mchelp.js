module.exports = {
    name: 'mchelp',
    description: 'Shows help for all commands',
    execute(msg, Discord){
        const embed = new Discord.MessageEmbed()
        .setColor('#08c945')
        .setTitle('Minecraft Discord Bot Help')
        .setAuthor('Minecraft Bot', 'https://i.imgur.com/U8KzLm2.png')
        .setThumbnail('https://i.imgur.com/U8KzLm2.png')
        .addFields(
            { name: '!mcserver *[minecraft server IP]* | *[OPTIONAL server port]*', value: 'Displays general info about a minecraft server such as its online players' },
            { name: '!mcseed', value: 'Generates a Minecraft Java seed that can be used for worlds' },
            { name: '!mcsplash', value: 'Shows you a random Minecraft Java splash' },
            { name: '!mcskin *[username here]*', value: 'Sends the corresponding skin to the username using the Crafatar and Mojang APIs' },
            { name: '!mccape *[username here]*', value: 'Sends the corresponding OptiFine or Minecraft cape to the username using the OptiFine, Crafatar and Mojang APIs' },
            { name: '!mchead *[username here]*', value: 'Sends the corresponding head and give command to the username using the Crafatar and Mojang APIs' },
            { name: '!colorcodes', value: 'Gives you the codes for colors in Minecraft' },
            { name: '!kill *[OPTIONAL username here]* | *[OPTIONAL username here]*', value: 'Generates a death message for the usernames provided' },
            { name: '!mcstats [hypixel, hive, or 2b2t] | *[username here]*', value: 'Fetches a Minecraft users Hypixel or Hive data' },
            { name: '!mcwiki [Search term]', value: 'Searches the Minecraft Wiki for some info' },
            { name: '!mchelp', value: 'Shows this help screen here' }
        )
        msg.channel.send(embed);
        return;
    }
}