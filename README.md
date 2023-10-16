# Parity Purchasing Power Demo

## Develop

```sh
npm install # Only needed once
npm start
```

## Build new data

Raw data sourced from World Bank (2021): https://data.worldbank.org/indicator/PA.NUS.PPP

```sh
# Pulls from ./data/ppp-worldbank-raw.json local file
npm run data
```

This will also inject the data into the ppp.js Web Component file.