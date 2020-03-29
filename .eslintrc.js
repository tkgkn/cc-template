module.exports = {
	// 使用alloy规则
	extends: ['alloy'],
	env: {
		// 预定义的环境变量
		browser: true,
		node: true
	},
	globals: {
		// 全局变量不报错，比如$, jQuery
	},
	rules: {
		// 自定义rules
	}
}
