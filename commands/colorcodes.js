module.exports = {
    name: 'colorcodes',
    description: 'Gives you the Minecraft color codes',
    execute(msg, Discord){
        const embed = new Discord.MessageEmbed()
        .setColor('#08c945')
        .setTitle('Minecraft Color Codes')
        .setAuthor('Minecraft Bot', 'https://i.imgur.com/U8KzLm2.png')
        .setThumbnail('https://i.imgur.com/U8KzLm2.png')
        .addFields(
            { name: '§0', value: '```\nBlack Text (#000000)\n```' },
            { name: '§1', value: '```ini\n[Dark Blue Text (#0000AA)]\n```' },
            { name: '§2', value: '```diff\n+Dark Green Text (#00AA00)\n```' },
            { name: '§3', value: '```ini\n[Dark Aqua Text (#00AAAA)]\n```' },
            { name: '§4', value: '```diff\n-Dark Red Text (#AA0000)\n```' },
            { name: '§5', value: '```\nDark Purple Text (#AA00AA)\n```' },
            { name: '§6', value: '```fix\nGold Text (#FFAA00)\n```' },
            { name: '§7', value: '```\nGray Text (#AAAAAA)\n```' },
            { name: '§8', value: '```\nDark Gray Text (#555555)\n```' },
            { name: '§9', value: '```ini\n[Blue Text (#5555FF)]\n```' },
            { name: '§a', value: '```diff\n+Green Text (55FF55)\n```' },
            { name: '§b', value: '```ini\n[Aqua Text (#55FFFF)]\n```' },
            { name: '§c', value: '```diff\n-Red Text (#FF5555)\n```' },
            { name: '§d', value: '```\nLight Purple Text (#FF55FF)\n```' },
            { name: '§e', value: '```fix\nYellow Text (#FFFF55)\n```' },
            { name: '§g', value: '```fix\nDark Yellow Text (#DDD605) BEDROCK ONLY\n```' },
            { name: '§f', value: '```\nWhite Text (#FFFFFF)\n```' },
            { name: '§k', value: 'Obfuscated' },
            { name: '§l', value: '**Bold**' },
            { name: '§m', value: '~~Strikethrough~~' },
            { name: '§n', value: '__Underline__' },
            { name: '§o', value: '*Italic*' },
            { name: '§r', value: 'Reset' }
        )
        msg.channel.send(embed);
        return;
    }
}