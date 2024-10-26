module.exports = (api) => {
	api.cache(true)

	const plugins = [
		"@babel/plugin-transform-runtime",
		"@babel/plugin-proposal-class-properties",
	]

	const presets = [
		["@babel/preset-env", { targets: { node: "current" } }]
	]

	return {
		plugins,
		presets,
	}
};