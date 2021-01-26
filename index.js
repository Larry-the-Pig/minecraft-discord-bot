const Discord = require('discord.js');
const client = new Discord.Client;
const prefix = '!';
const ping = require('minecraft-server-util');
const fetch = require('node-fetch');
const MojangAPI = require('mojang-api');
const fs = require('fs');
const htmlToText = require('html-to-text');
const imgur = require('imgur');

var splashes = ["As seen on TV!", "Awesome!", "100% pure!", "May contain nuts!", "More polygons!", "Sexy!", "Limited edition!", "Flashing letters!", "It's here!", "Best in class!", "It's finished!", "Kind of dragon free!", "Excitement!", "More than 500 sold!", "One of a kind!", "Heaps of hits on YouTube!", "Indev!", "Spiders everywhere!", "Check it out!", "Holy cow, man!", "It's a game!", "Made in Sweden!", "Uses LWJGL!", "Reticulating splines!", "Minecraft!", "Yaaay!", "Singleplayer!", "Keyboard compatible!", "Undocumented!", "Ingots!", "Exploding creepers!", "That's no moon!", "l33t!", "Create!", "Survive!", "Dungeon!", "Exclusive!", "The bee's knees!", "Down with O.P.P.!", "Closed source!", "Classy!", "Wow!", "Not on steam!", "Oh man!", "Awesome community!", "Pixels!", "Teetsuuuuoooo!", "Kaaneeeedaaaa!", "Now with difficulty!", "Enhanced!", "90% bug free!", "Pretty!", "12 herbs and spices!", "Fat free!", "Absolutely no memes!", "Free dental!", "Ask your doctor!", "Minors welcome!", "Cloud computing!", "Legal in Finland!", "Hard to label!", "Technically good!", "Bringing home the bacon!", "Indie!", "GOTY!", "Ceci n'est pas une title screen!", "Euclidian!", "Now in 3D!", "Inspirational!", "Herregud!", "Complex cellular automata!", "Yes, sir!", "Played by cowboys!", "OpenGL 2.1 (if supported)!", "Thousands of colors!", "Try it!", "Age of Wonders is better!", "Try the mushroom stew!", "Sensational!", "Hot tamale, hot hot tamale!", "Play him off, keyboard cat!", "Guaranteed!", "Macroscopic!", "Bring it on!", "Random splash!", "Call your mother!", "Monster infighting!", "Loved by millions!", "Ultimate edition!", "Freaky!", "You've got a brand new key!", "Water proof!", "Uninflammable!", "Whoa, dude!", "All inclusive!", "Tell your friends!", "NP is not in P!", "Music by C418!", "Livestreamed!", "Haunted!", "Polynomial!", "Terrestrial!", "All is full of love!", "Full of stars!", "Scientific!", "Not as cool as Spock!", "Collaborate and listen!", "Never dig down!", "Take frequent breaks!", "Not linear!", "Han shot first!", "Nice to meet you!", "Buckets of lava!", "Ride the pig!", "Larger than Earth!", "sqrt(-1) love you!", "Phobos anomaly!", "Punching wood!", "Falling off cliffs!", "1% sugar!", "150% hyperbole!", "Synecdoche!", "Let's danec!", "Seecret Friday update!", "Reference implementation!", "Lewd with two dudes with food!", "Kiss the sky!", "20 GOTO 10!", "Verlet intregration!", "Peter Griffin!", "Do not distribute!", "Cogito ergo sum!", "4815162342 lines of code!", "A skeleton popped out!", "The sum of its parts!", "BTAF used to be good!", "I miss ADOM!", "umop-apisdn!", "OICU812!", "Bring me Ray Cokes!", "Finger-licking!", "Thematic!", "Pneumatic!", "Sublime!", "Octagonal!", "Une baguette!", "Gargamel plays it!", "Rita is the new top dog!", "SWM forever!", "Representing Edsbyn!", "Matt Damon!", "Supercalifragilisticexpialidocious!", "Consummate V's!", "Cow Tools!", "Double buffered!", "Fan fiction!", "Flaxkikare!", "Jason! Jason! Jason!", "Hotter than the sun!", "Internet enabled!", "Autonomous!", "Engage!", "Fantasy!", "DRR! DRR! DRR!", "Kick it root down!", "Regional resources!", "Woo, facepunch!", "Woo, somethingawful!", "Woo, /v/!", "Woo, tigsource!", "Woo, worldofminecraft!", "Woo, reddit!", "Woo, 2pp!", "Google anlyticsed!", "Now supports åäö!", "Give us Gordon!", "Tip your waiter!", "Very fun!", "12345 is a bad password!", "Vote for net neutrality!", "Lives in a pineapple under the sea!", "MAP11 has two names!", "Omnipotent!", "Gasp!", "...!", "Bees, bees, bees, bees!", "Jag känner en bot!", "This text is hard to read if you play the game at the default resolution, but at 1080p it's fine!", "Haha, LOL!", "Hampsterdance!", "Switches and ores!", "Menger sponge!", "idspispopd!", "Eple (original edit)!", "So fresh, so clean!", "Slow acting portals!", "Try the Nether!", "Don't look directly at the bugs!", "Oh, ok, Pigmen!", "Finally with ladders!", "Scary!", "Play Minecraft, Watch Topgear, Get Pig!", "Twittered about!", "Jump up, jump up, and get down!", "Joel is neat!", "A riddle, wrapped in a mystery!", "Huge tracts of land!", "Welcome to your Doom!", "Stay a while, stay forever!", "Stay a while and listen!", "Treatment for your rash!", 'Autological" is!', "Information wants to be free!", '"Almost never" is an interesting concept!', "Lots of truthiness!", "The creeper is a spy!", "Turing complete!", "It's groundbreaking!", "Let our battle's begin!", "The sky is the limit!", "Jeb has amazing hair!", "Ryan also has amazing hair!", "Casual gaming!", "Undefeated!", "Kinda like Lemmings!", "Follow the train, CJ!", "Leveraging synergy!", "This message will never appear on the splash screen, isn't that weird?", "DungeonQuest is unfair!", "90210!", "Check out the far lands!", "Tyrion would love it!", "Also try VVVVVV!", "Also try Super Meat Boy!", "Also try Terraria!", "Also try Mount And Blade!", "Also try Project Zomboid!", "Also try World of Goo!", "Also try Limbo!", "Also try Pixeljunk Shooter!", "Also try Braid!", "That's super!", "Bread is pain!", "Read more books!", "Khaaaaaaaaan!", "Less addictive than TV Tropes!", "More addictive than lemonade!", "Bigger than a bread box!", "Millions of peaches!", "Fnord!", "This is my true form!", "Totally forgot about Dre!", "Don't bother with the clones!", "Pumpkinhead!", "Made by Jeb!", "Has an ending!", "Finally complete!", "Feature packed!", "Boots with the fur!", "Stop, hammertime!", "Testificates!", "Conventional!", "Homeomorphic to a 3-sphere!", "Doesn't avoid double negatives!", "Place ALL the blocks!", "Does barrel rolls!", "Meeting expectations!", "PC gaming since 1873!", "Ghoughpteighbteau tchoghs!", "Déjà vu!", "Déjà vu!", "Got your nose!", "Haley loves Elan!", "Afraid of the big, black bat!", "Doesn't use the U-word!", "Child's play!", "See you next Friday or so!", "From the streets of Södermalm!", "150 bpm for 400000 minutes!", "Technologic!", "Funk soul brother!", "Pumpa kungen!", "日本ハロー！", "한국 안녕하세요!", "Helo Cymru!", "Cześć Polsko!", "你好中国！", "Привет Россия!", "Γεια σου Ελλάδα!", "My life for Aiur!", "Lennart lennart = new Lennart();", "I see your vocabulary has improved!", "Who put it there?", "You can't explain that!", "if not ok then return end", "Colormatic", "FUNKY LOL", "Big Pointy Teeth!", "Bekarton guards the gate!", "Mmmph, mmph!", "Don't feed avocados to parrots!", "Swords for everyone!", "Plz reply to my tweet!", ".party()!", "Take her pillow!", "Put that cookie down!", "Pretty scary!", "I have a suggestion.", "Now with extra hugs!", "Now Java 8!", "Woah.", "HURNERJSGER?", "What's up, Doc?", "Now contains 32 random daily cats!", "That's Numberwang!", "pls rt", "Do you want to join my server?", "Put a little fence around it!", "Throw a blanket over it!", "One day, somewhere in the future, my work will be quoted!", "Now with additional stuff!", "Extra things!", "Yay, puppies for everyone!", "So sweet, like a nice bon bon!", "Popping tags!", "Very influential in its circle!", "Now With Multiplayer!", "Rise from your grave!", 'Warning! A huge battleship "STEVE" is approaching fast!', "Blue warrior shot the food!", "Run, coward! I hunger!", "Flavor with no seasoning!", "Strange, but not a stranger!", "Tougher than diamonds, rich like cream!", "Getting ready to show!", "Getting ready to know!", "Getting ready to drop!", "Getting ready to shock!", "Getting ready to freak!", "Getting ready to speak!", "It swings, it jives!", "Cruising streets for gold!", "Take an eggbeater and beat it against a skillet!", "Make me a table, a funky table!", "Take the elevator to the mezzanine!", "Stop being reasonable, this is the Internet!", "/give @a hugs 64", "This is good for Realms.", "Any computer is a laptop if you're brave enough!", "Do it all, everything!", "Where there is not light, there can spider!", "GNU Terry Pratchett", "More Digital!", "doot doot", "Falling with style!", "There's no stopping the Trollmaso", "Throw yourself at the ground and miss", "Rule #1: it's never my fault", "Replaced molten cheese with blood?", "Absolutely fixed relatively broken coordinates", "Boats FTW", "Javalicious edition", "Should not be played while driving", "You're going too fast!", "Don't feed chocolate to parrots!", "The true meaning of covfefe", "An illusion! What are you hiding?", "Something's not quite right...", "Thank you for the fish!", "All rumors are true!", "Truly gone fishing!", "Rainbow turtle?", "Something funny!", "I need more context.", "Ahhhhhh!", "Don't worry, be happy!", "Water bottle!", "What's the question?", "Plant a tree!", "Go to the dentist!", "What do you expect?", "Look mum, I'm in a splash!", "It came from space.", "Awesome game design right there!", "Ph1lza had a good run!", "10 years of Mining and Crafting!", "Ping the human!"]
var pvpDeathMessages = [" was doomed to fall by ", " fell too far and was finished by ", " was struck by lightning whilst fighting ", " walked into fire whilst fighting ", "  was burnt to a crisp whilst fighting ", " tried to swim in lava to escape ", " walked into danger zone due to ", " suffocated in a wall whilst fighting ", " was squashed by ", " drowned whilst trying to escape ", " starved to death whilst fighting ", " walked into a cactus whilst trying to escape ", " died because of ", " was blown up by ", " was killed by magic whilst trying to escape ", " withered away whilst fighting ", " was squashed by a falling anvil whilst fighting ", " was squashed by a falling block whilst fighting ", " was slain by ", " was shot by ", " was fireballed by ", " was pummeled by ", " was killed by  using magic", " was killed trying to hurt ", " was impaled by ", " hit the ground too hard whilst trying to escape ", " didn't want to live in the same world as ", " was roasted in dragon breath by ", " experienced kinetic energy whilst trying to escape ", " went off with a bang whilst fighting ", " was killed by ", " was poked to death by a sweet berry bush whilst trying to escape ", " was stung to death by "]
var selfDeathMessages = [" fell off a ladder", " fell off some vines", " fell off some weeping vines", " fell off some twisting vines", " fell off scaffolding", " fell while climbing", " fell from a high place", " was doomed to fall", " was struck by lightning", " went up in flames", " burned to death", " tried to swim in lava", " discovered the floor was lava", " suffocated in a wall", " was squished too much", " drowned", " starved to death", " was pricked to death", " died", " blew up", " was killed by magic", " was killed by even more magic", " withered away", " was squashed by a falling anvil", " was squashed by a falling block", " hit the ground too hard", " fell out of the world", " was roasted in dragon breath", " experienced kinetic energy", " went off with a bang", " was killed by Intentional Game Design", " was poked to death by a sweet berry bush", " was stung to death"]

client.commands = new Discord.Collection;
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.on('message', msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot ) return;
    let args = msg.content.substring(prefix.length).split(' ');
    var wikiSearch = msg.content.slice(8);
    const command = args.shift().toLowerCase();
    if(command === 'mcmusic'){
        client.commands.get('mcmusic').execute(msg, Discord, client, args)
    }
    if(command === 'mcserver'){
        client.commands.get('mcserver').execute(msg, args, ping, Discord, imgur)
    }
    if(command === 'mcseed'){
        client.commands.get('mcseed').execute(msg)
    }
    if(command === 'mcsplash'){
        client.commands.get('mcsplash').execute(msg, args, splashes, Discord)
    }
    if(command === 'mchelp'){
        client.commands.get('mchelp').execute(msg, Discord)
    }
    if(command === 'mcskin'){
        client.commands.get('mcskin').execute(msg, args, MojangAPI, Discord)
    }
    if(command === 'kill'){
        client.commands.get('kill').execute(msg, args, selfDeathMessages, pvpDeathMessages, Discord)
    }
    if(command === 'colorcodes'){
        client.commands.get('colorcodes').execute(msg, Discord)
    }
    if(command === 'mccape'){
        client.commands.get('mccape').execute(msg, args, MojangAPI, Discord, fetch)
    }
    if(command === 'mchead'){
        client.commands.get('mchead').execute(msg, args, MojangAPI, Discord)
    }
    if(command === 'mcstats'){
        client.commands.get('mcstats').execute(msg, args, MojangAPI, fetch, Discord)
    }
    if(command === 'correctspelling'){
        client.commands.get('correctspelling').execute(msg, args, MojangAPI)
    }
    if(command === 'mcwiki'){
        client.commands.get('mcwiki').execute(msg, wikiSearch, fetch, Discord, htmlToText)
    }
});

client.on('ready', () =>{
    console.log('Bot Online');
    client.user.setActivity('!mchelp')
})



fs.readFile('./keys/login-token.txt', 'utf8', (error, response) =>{
    client.login(response)
})