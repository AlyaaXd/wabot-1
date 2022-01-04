let fs = require('fs')
let fetch = require('node-fetch')
global.tum = fs.readFileSync('./src/zerothumb.jpg')
global.tum2 = fs.readFileSync('./src/zerothumb.jpg')
global.thumb = fs.readFileSync('./src/zerothumb.jpg')
global.thumb2 = fs.readFileSync('./src/zerothumb.jpg')
global.owner = ['6289505165400', '6289505165400', '6289505165400','6289505165400','6289505165400','6289505165400','6289505165400'] // Put your number here
global.mods = ['6289505165400'] // Want some help?
global.prems = ['6289505165400','6289505165400','6289505165400'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com', 
  Dehan: 'https://dhnjing.xyz',
  Velgrynd: 'https://velgrynd.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'AbilGanss',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'Nyarlathotep',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://dhnjing.xyz': 'e2645065aaced89861b4',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://velgrynd.herokuapp.com': '79lJ9HEA'
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'LitRHap'
global.multiplier = 69 // The higher, The harder levelup

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
