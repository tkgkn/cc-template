export function checkTime(time, type = 1, range = 7) {
	const now = new Date()
	const nowY = now.getFullYear()
	const nowM = now.getMonth() + 1
	const nowD = now.getDate()
	const todayEnd = new Date(`${nowY}/${nowM}/${nowD} 23:59:59`).getTime()
	const todayStart = new Date(`${nowY}/${nowM}/${nowD} 00:00:00`).getTime()

	const msgTime = new Date(time)
	const dis = todayStart - time

	// 如果time落在今天的开始和结束之间，则是今天。显示时，分
	if (time > todayStart && time < todayEnd) {
		const h = msgTime
			.getHours()
			.toString()
			.padStart(2, '0')
		const m = msgTime
			.getMinutes()
			.toString()
			.padStart(2, '0')
		return `${h}:${m}`
	}

	if (type === 1) {
		// 如果time < todayStart 且在 24小时的毫秒数内，是昨天
		if (dis < 86400000) {
			return '昨天'
		} else {
			return finalShowDate()
		}
	}

	if (type === 2) {
		let txt = ''
		const arr = new Array(range).fill(1).map((item, index) => {
			const timeLen = 86400000
			return {
				min: timeLen * index,
				max: timeLen * (index + 1)
			}
		})
		const flag = arr.some((item, index) => {
			if (dis > item.min && dis < item.max) {
				txt = `${index + 1}天前`
				return true
			}
			return false
		})
		if (flag) {
			return txt
		} else {
			return finalShowDate()
		}
	}

	function finalShowDate() {
		// 否则显示日期
		const msgY = msgTime.getFullYear()
		const msgM = (msgTime.getMonth() + 1).toString().padStart(2, '0')
		const msgD = msgTime
			.getDate()
			.toString()
			.padStart(2, '0')
		return `${msgY}/${msgM}/${msgD}`
	}
}
