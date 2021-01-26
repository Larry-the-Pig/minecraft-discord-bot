module.exports = {
    name: 'mcseed',
    description: 'Generates a Minecraft Java seed',
    execute(msg){
        const seed = Math.floor(Math.random() * (9223372036854775807 - -9223372036854775808) ) + -9223372036854775808;
        msg.channel.send(seed);
        return;
    }
}