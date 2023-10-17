# `<ppp-price>` Web Component

A small structural-only zero-dependency Web Component to show Parity Purchasing Power normalized prices. Inspired by the [Wes Bos blog post](https://wesbos.com/parity-purchasing-power).

## Usage




## Develop

```sh
npm install # Only needed once
npm start
```

### Build new data

This step is run with `npm start`. Raw data sourced from World Bank (2021): https://data.worldbank.org/indicator/PA.NUS.PPP

```sh
# Pulls from ./data/ppp-worldbank-raw.json local file
npm run data
```

This will also inject the data into the ppp.js Web Component file.