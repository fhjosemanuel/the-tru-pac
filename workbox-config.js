module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,css,jpg,png,PNG,js,json,md,txt,eot,svg,ttf,woff,woff2}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};