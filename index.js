const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})



function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


var quotes = [
  "Plug in your chromebook -Steven Michael Pape, 2019",
  "If you keep the commons clean, maybe you can eat at assemblies -Steven Michael Pape, 2019",
  "Is that a phone is your pocket? -Steven Michael Pape, 2019",
  "I'll bring donuts for c&c -Steven Michael Pape, 2019",
  "My name is Dr. Roboto -Steven Michael Pape to some random 6th grader",
  "I wish there was something I could do -Steven Michael Pape when asked to do literally anything",
  "I don't make up the rules, I just enforce them -Steven Michael Pape, making up the rules"
]




client.on("message", msg => {
  if (msg.content === "-cat" || msg.content === "-CatFact" || msg.content === "-catfacts" || msg.content === "-dog" || msg.content === "-cf") {
    sleep(200)
    msg.reply("citation needed")
    msg.reply("https://imgs.xkcd.com/comics/wikipedian_protester.png")
  }
  if (msg.content === "!rank") {
    sleep(200)
    msg.reply("should chill")
  }
  //steve quoter 1000
  if (msg.content === "=quote") {
    msg.reply(quotes[Math.floor(Math.random() * quotes.length)])
  }
  //steve quoter 1000
  if (msg.content === "=quotes") {
    msg.reply(quotes)
  }

  if (msg.content === "=help") {
    sleep(200)
    msg.reply("Hi, I'm Steve the bot (not to be confused with Steve the human) and I'm here to moderate this server. If you have any questions, feel free to @Kaz and ask him (he is my developer). If you would like to contrubute, great! I am open source at https://github.com/KazMalhotra/discordbot.")
  }

})

var key = process.env.API_KEY;
client.login(key)
