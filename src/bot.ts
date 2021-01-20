import Eris from 'eris';
import config from '../configuration/config';
const bot: Eris.CommandClient = new Eris.CommandClient(config.token, {}, {
    description: "A bot that uwufies and it's made with Eris",
    owner: "somebody",
    prefix: "uwu!"
});

bot.on("ready", () => {
    console.log(`Bot ${bot.user.username} is ready uwu`);
});

bot.registerCommand("uwuify", (msg: any, args: any) => {
   const uwuFaces = ["(・`ω´・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];
   const uwuifyText = (e: String) =>
        (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/(?:r|l)/g, "w")).replace(/(?:R|L)/g, "W")).replace(/n([aeiou])/g, "ny$1")).replace(/N([aeiou])/g, "Ny$1")).replace(/N([AEIOU])/g, "Ny$1")).replace(/ove/g, "uv")).replace(
            /th/g,
            "f"
        )).replace(/Th/g, "f")).replace(/\!+/g, " " + uwuFaces[Math.floor(Math.random() * uwuFaces.length)] + " "));

    let uwumeMessage = args.join(' ');
    return uwuifyText(uwumeMessage);
}, {
    description: "Make the bot uwuify something somethin",
    usage: "<text>"
});


bot.connect();
