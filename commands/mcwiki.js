const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'mcwiki',
    description: 'Searches the Minecraft Wiki for stuff',
    execute(msg, wikiSearch, fetch, Discord, htmlToText){
        if(wikiSearch.length > 0) {
            fetch('https://minecraft.gamepedia.com/api.php?action=query&prop=extracts&exsentences=10&explaintext=1&format=json&formatversion=2&exlimit=1&titles=' + wikiSearch)
            .then(res => res.json())
            .then(json => {
                const embed = new Discord.MessageEmbed()
                .setColor('#08c945')
                .setTitle(json.query.pages[0].title)
                .setDescription(json.query.pages[0].extract)
                .setFooter("Page ID: " + json.query.pages[0].pageid)
                msg.channel.send(embed)
            })
        }
    }
}