const fs = require("node:fs");
const lookup = require("country-code-lookup");

// const MIN_RATIO = 0.55555556; // $10 costs up to $18
// const MAX_RATIO = 5; // $10 costs at least $2

let raw = require("./data/ppp-worldbank-raw.json");
let data = {};

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
	}
}

const STRING_REPLACE = '"/* PRICING INJECTION */"';
let content = fs.readFileSync("./data/ppp-raw.js", "utf8");
content = content.split(STRING_REPLACE).join(JSON.stringify(data));

fs.writeFileSync("./ppp.js", content);
