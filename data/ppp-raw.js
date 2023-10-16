class PPP extends HTMLElement {
	static attrs = {
		from: "from",
		to: "to",
		currency: "from-currency",
		currencyDisplay: "currency-display",
		original: "data-original-value",
	};

	static pricing = "/* PRICING INJECTION */";

	getCurrency() {
		let fromCurrency = this.getAttribute(PPP.attrs.currency);
		if(fromCurrency) {
			return fromCurrency.toUpperCase();
		}

		let attr = this.getAttribute(PPP.attrs.original);
		let match = attr.match(/\b[A-Z]{3}\b/);
		if(match[0]) {
			return match[0].toUpperCase();
		}
	}

	formatPrice(content, num, locale) {
		let currency = this.getCurrency();

		if(!("NumberFormat" in Intl) || !currency) {
			return content.replace(/[0-9\.]+/, num);
		}

		let localized = new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
			currencyDisplay: this.getAttribute(PPP.attrs.currencyDisplay) || "symbol",
		});

		return localized.format(num);
	}

	fetchAutoCountryCode() {
		// CloudCannon
		for(let cls of document.documentElement.classList) {
			if(cls.startsWith("country-")) {
				return cls.slice("country-".length);
			}
		}
	}

	getPrice(content) {
		return parseFloat(content.replace(/[^0-9\.]*/g, ""))
	}

	connectedCallback() {
		let from = this.getAttribute(PPP.attrs.from);
		let to = this.getAttribute(PPP.attrs.to);
		if(!to || to === "auto") {
			to = this.fetchAutoCountryCode();
			if(!to) {
				console.warn("Could not find country code for", this);
			}
		}

		let fromPricing = PPP.pricing[from?.toUpperCase()];
		let toPricing = PPP.pricing[to?.toUpperCase()];

		let price = this.getPrice(this.textContent);
		if(fromPricing) {
			this.setAttribute(PPP.attrs.original, this.textContent);
		}
		if(fromPricing && toPricing) {
			let fromRatio = parseFloat(fromPricing);
			let toRatio = parseFloat(toPricing);
			let newPrice = (price * (fromRatio/toRatio)).toFixed(2);

			this.textContent = this.formatPrice(this.textContent, newPrice, toPricing.code);
		} else if(fromPricing) {
			this.textContent = this.formatPrice(this.textContent, price, fromPricing.code);
		}
	}
}

if("customElements" in window) {
	window.customElements.define("parity-purchasing-price", PPP);
}
