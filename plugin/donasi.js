let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • pulsa 〕
├ axis🥀 : 6283813417529
├ axis🥀 : 6283813417529
├ 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 RIEL¹🥀
├ https://chat.whatsapp.com/L4wHUhXDZQyIX9d8eDNV76
├ 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 RIEL²🥀
├ https://chat.whatsapp.com/HYr6cgrs7jmEmPMFtwviHW
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
