const colors = require("colors")

const dbd = require("dbd.js")

const bot = new dbd.Bot({ 
  token: "ODI5ODgxMjU0ODU3NTM5NTg1.YG-lJQ.XVmLvNsveiaSdX8eCH7v9AWezEU", 
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