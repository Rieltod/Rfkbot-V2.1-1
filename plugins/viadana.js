let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Digi
╠➥ 60149431385
║➥ Chat owner terlebih dahulu
║- wa.me/60189830350
║ 
╠═ © LanXzy & LynXzy
╠═ Thanks
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viadigi$/i

module.exports = handler
