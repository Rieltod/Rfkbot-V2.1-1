// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/BCkOrQkTa7pIORSOWyBJpk'
gc2 = 'https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB'
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/BCkOrQkTa7pIORSOWyBJpk', 'https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB'] // ganti jadi group lu
global.owner = ['6282146218274','6281251497082'] // Put your number here //owner eval
global.kontak = ['6282146218274','6281251497082'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6282146218274','6281251497082','6282287750102'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'f6898e891be84fcd',
  'https://api.lolhuman.xyz': '886e0ade87d2da2cab7f1906',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'f6898e891be84fcd',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'GAK ADA :)'
kasihcaption = `Nih kak`
namakontak1 = 'RielXzy🥀'
namakontak2 = 'BotRielXzy🥀'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'By RielXzy🥀' // ganti aja
global.author = 'RielXzy🥀' // ganti aja
global.watermark = 'RielXzy🥀'
global.wm = 'RielXzy🥀'

//yyy
bc = 'RielXzy🥀' //RielXy Broadcast
footer = '\n©RielGans'
namabot = 'BotRielXzy🥀'
namalu = 'RielXzy🥀'


// 
wait = '_*Tunggu ya ...*_'
global.wait = '_*Tunggu ya ...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// Ubah saja SC dari AlyaaXzy
global.image = 'https://telegra.ph/file/ede899da9be4d0bb0384b.jpg'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 36 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
