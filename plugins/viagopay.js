let handler = async (m, { conn }) => {
	conn.reply(m.chat, `╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Umobile
║➥ 60189830350
║- chat owner terlebih dahulu
║- wa.me/60189830350
║
╠═ © LanXzy & LynXzy
╠═ Thanks✨
╠═〘 ${namabot} 〙 ═`.trim(), m)
}

handler.command = /^viaumobile$/i

module.exports = handler
