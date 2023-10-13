const EleventyFetch = require("@11ty/eleventy-fetch");
const { default: countryCodeToFlagEmoji } = require("country-code-to-flag-emoji");

// sourced from spotify pricing index
// https://mts.io/projects/spotify-pricing/
const URL = "https://raw.githubusercontent.com/matiassingers/spotify-pricing/master/data/countries.json";

module.exports = async function() {
  let remoteData = await EleventyFetch(URL, {
    duration: "*", // save forever
    type: "json"
  });

  let usdPrice = remoteData.find(entry => entry.rel === "us")?.convertedPrice;
  if(!usdPrice) {
    throw new Error("USD price not found in Spotify Pricing Index data.");
  }

  let data = {};
  remoteData.forEach(entry => {
    data[entry.rel] = {
      code: entry.rel,
      ratio: (entry.convertedPrice / usdPrice).toFixed(5),
      flag: countryCodeToFlagEmoji(entry.rel),
      currencyLabel: entry.currency,
    };
  });
  return data;
};