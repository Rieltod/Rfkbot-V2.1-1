let { performance } = require('perf_hooks')
let fetch = require('node-fetch')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  let str = `
╠═〘 ${package.name} 〙 ═
╠➥ *Versi* : 1.5.0
╠➥ *Homepage* : -
╠➥ *Issue:* ${package.bugs.url}
╠➥ *Prefix:* ' ${usedPrefix} '
╠➥ *Menu:* ${usedPrefix}menu
╠➥ *Ping:* ${neww - old} *ms*
╠➥ *Total user:* ${totalreg} *user*
╠➥ *Uptime:* ${uptime}
║
╠═〘 DONASI 〙 ═
╠➥ DIGI [60149431385]
╠➥ UMOBILE [60189830350]
╠═〘 OWNER BOT 〙═
╠➥ wa.me/60189830350
║
║${readMore}
╠═〘 PIRACY BOT 〙 ═
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS PENYALAH*
║   *GUNAAN BOT*
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS KEBOCORAN DATA*
║   *PRIBADI ANDA*
╠➥ *KAMI AKAN MENYIMPAN DATA*
║   *SEPERTI NOMER TELEPON*
║   *ANDA DI DATABASE KAMI*
║
╠═〘GROUP BOT¹🥀〙═
╠➥https://chat.whatsapp.com/BCkOrQkTa7pIORSOWyBJpk
╠═〘GROUP BOT²🥀〙═
╠➥https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB
║
╠═ ©2021 ${package.name}
╠═ Scrip original by Lan Official
╠═ Creator : LynXzy
╠═ Api xsteam :St4r
╠═ Resta
╠═ Ariq
╠═〘 LynXzy 〙 ═`.trim()
     await conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), str, '©Lan Official ⁩×͜×', 'Owner', '.owner', 'Menu', '.menu', m)
}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
