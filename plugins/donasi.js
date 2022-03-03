let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Pin 〕
├ Digi🥀 : 60149431385
├ Umobile🥀 : 60189830350
├ 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 𝐋𝐘𝐍¹🥀
├ https://chat.whatsapp.com/EheAWPrQMhV25xW0N7l7WD
├ 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 𝐋𝐘𝐍²🥀
├ https://chat.whatsapp.com/GzDQlgoUamS5Ok4EOcYRRB
└────
`.trim(), footer, 'Owner', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
