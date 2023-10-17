# `<ppp-price>` Web Component

A small structural-only zero-dependency Web Component to show Parity Purchasing Power normalized prices. Inspired by the [Wes Bos blog post](https://wesbos.com/parity-purchasing-power).

## Usage


## Installation

You have a few options (choose one of these):

1. Install via [npm](https://www.npmjs.com/package/@zachleat/parity-purchasing-power-price): `npm install @zachleat/parity-purchasing-power-price` and reference it in your HTML `<script type="module" src="ppp.js"></script>`
1. [Download the source manually from GitHub](https://github.com/zachleat/parity-purchasing-power-price/tags) into your project and reference it in your HTML `<script type="module" src="ppp.js"></script>`
1. Skip this step and use the script directly via a 3rd party CDN (not recommended for production use), like: `<script type="module" src="https://www.unpkg.com/@zachleat/parity-purchasing-power-price@1.0.0/ppp.js"></script>` or `<script type="module" src="https://esm.sh/@zachleat/parity-purchasing-power-price@1.0.0"></script>`

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