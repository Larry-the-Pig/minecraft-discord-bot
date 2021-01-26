module.exports = {
    name: 'mcsplash',
    description: 'Generates a Minecraft Java splash',
    execute(msg, args, splashes, Discord){
        var selectedSplash = splashes[Math.floor(Math.random() * splashes.length)];
        msg.channel.send(selectedSplash);
        return;
    }
}