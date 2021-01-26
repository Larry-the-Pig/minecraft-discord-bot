module.exports = {
    name: 'kill',
    description: 'Generates a Minecraft death message',
    execute(msg, args, selfDeathMessages, pvpDeathMessages, Discord){
        if(!args[0]) {
            var selectedDeath = selfDeathMessages[Math.floor(Math.random() * selfDeathMessages.length)];
            msg.channel.send(msg.author.username + selectedDeath)
        }
        if(args[0] && !args[1]) {
            var selectedDeath = pvpDeathMessages[Math.floor(Math.random() * pvpDeathMessages.length)];
            msg.channel.send(args[0] + selectedDeath + msg.author.username)
        }
        if(args[1]) {
            var selectedDeath = pvpDeathMessages[Math.floor(Math.random() * pvpDeathMessages.length)];
            msg.channel.send(args[0] + selectedDeath + args[1])
        }
    }
}