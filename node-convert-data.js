const fs = require("node:fs");
const lookup = require("country-code-lookup");
const { default: countryCodeToFlagEmoji } = require("country-code-to-flag-emoji");

// const MIN_RATIO = 0.55555556; // $10 costs up to $18
// const MAX_RATIO = 5; // $10 costs at least $2

let raw = require("./data/ppp-worldbank-raw.json");
let data = {};
let flags = {};

for(let entry of raw) {
	let country = lookup.byIso(entry.code);

	if(country && entry.pppratio) {
		let code = country.iso2;

		if(data[code]) {
			throw new Error(`Duplicate country ${JSON.stringify(entry, null, 2)}`);
		}
		let ratio = Number(entry.pppratio.toFixed(5));

		// If you want a min/max
		// ratio = Math.max(Math.min(ratio, MAX_RATIO), MIN_RATIO);
		data[code] = ratio;
		flags[code] = {
			name: country.country,
			flag: countryCodeToFlagEmoji(code),
		}
	}
}

const STRING_REPLACE = '"/* DATA INJECTION */"';

let pricingContent = fs.readFileSync("./data/ppp-raw.js", "utf8");
pricingContent = pricingContent.split(STRING_REPLACE).join(JSON.stringify(data));

fs.writeFileSync("./ppp.js", pricingContent);

let flagContent = fs.readFileSync("./data/geolocation-display-raw.js", "utf8");
flagContent = flagContent.split(STRING_REPLACE).join(JSON.stringify(flags));
fs.mkdirSync("./src/public/", {recursive: true});
fs.writeFileSync("./src/public/geolocation-display.js", flagContent);
