module.exports = {
    name: 'correctspelling',
    description: 'e',
    execute(msg, args, MojangAPI){
        MojangAPI.nameToUuid(args[0], (error, response) => {
            MojangAPI.profile(response[0].id, (error, response) =>{
                console.log(response.name)
                msg.channel.send(response.name)
            })
        })
        return;
    }
}