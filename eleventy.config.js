module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		"./node_modules/simpledotcss/simple.css": "/css/simple.css",
		"./ppp.js": "/js/ppp.js",
		"./src/public/geolocation-display.js": "/js/geolocation-display.js",
	});

	eleventyConfig.setServerOptions({
		domDiff: false
	});

	return {
		dir: {
			input: "src",
		}
	};
}