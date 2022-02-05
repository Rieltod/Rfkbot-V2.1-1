let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :     *Rm 15*
╠➥ *1 Bulan* :      *Rm 20*
╠➥ *2 Bulan* :      *Rm 25*
╠➥ *Permanen* : *Close!!*
╠➥ *Owner* :   *Rm 30*/bln
╠➥ *Nombor 60149431385(digi) & 60189830350(umobile)* : 
║    
╠═〘 PEMBAYARAN 〙 ═
╠➥ Topup/Pin
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Ketuk Tombol Di Bawah Ya
║
╠═ ©2021 Rpg wabot-aq
╠═ Scrip original by Lyn Official
╠═〘 LynXzy 〙 ═`.trim(), watermark, 'Dana', '#viadana', 'Pulsa', '#viapulsa', m)
}

handler.command = /^sewabot$/i

module.exports = handler
