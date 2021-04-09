const colors = require("colors")

const dbd = require("dbd.js")

const bot = new dbd.Bot({ 
  token: "TUTOKEN", 
  prefix: "TUPREFIX", //escribe el prefijo de tu bot ejemplo prefix: "!",
  mobile: false,
  fetchInvites: false,
  sharding: false,
  shardAmount: 0,
  disabledFunctions: [],
  })  


bot.loadCommands('./commands/')

bot.onMessage({
   respondToBots: false
})
require('./utils/status')(bot)
require('./utils/callbacks')(bot)///////////////
require('./utils/variables')(bot)
