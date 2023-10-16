class PPP extends HTMLElement {
	static attrs = {
		from: "from",
		to: "to",
		currency: "from-currency",
		currencyDisplay: "currency-display",
		original: "data-original-value",
	};

	static pricing = {"AW":1.22466,"AF":18.36659,"AO":197.87113,"AL":42.50181,"AE":2.11504,"AR":42.53251,"AM":159.75345,"AG":2.05836,"AU":1.44758,"AT":0.75631,"AZ":0.57723,"BI":668.65874,"BE":0.73669,"BJ":205.92965,"BF":205.89425,"BD":31.95791,"BG":0.71895,"BH":0.18395,"BS":0.85219,"BA":0.67525,"BY":0.86708,"BZ":1.28833,"BM":1.28922,"BO":2.60154,"BR":2.55346,"BB":2.26982,"BN":0.63697,"BT":20.06526,"BW":4.87912,"CF":276.70238,"CA":1.23816,"CH":1.10643,"CL":435.15618,"CN":4.17618,"CI":247.02971,"CM":226.37661,"CD":969.25403,"CG":355.86478,"CO":1353.37981,"KM":184.18246,"CV":45.58867,"CR":343.71626,"CW":1.3829,"KY":0.96277,"CY":0.60077,"CZ":12.74299,"DE":0.73628,"DJ":100.00198,"DM":1.72146,"DK":6.58981,"DO":23.5998,"DZ":41.06593,"EC":0.5067,"EG":4.53719,"ES":0.62595,"EE":0.54342,"ET":14.10266,"FI":0.82669,"FJ":0.84169,"FR":0.71867,"FM":0.97623,"GA":314.15002,"GB":0.67666,"GE":0.94678,"GH":2.33158,"GN":3984.86539,"GM":17.34909,"GW":218.18373,"GQ":257.72977,"GR":0.54554,"GD":1.61068,"GT":3.94887,"GY":86.16753,"HK":5.83907,"HN":10.82634,"HR":0.43217,"HT":46.53894,"HU":154.74815,"ID":4738.86034,"IN":22.63156,"IE":0.79473,"IR":45869.4118,"IQ":713.48781,"IS":149.67988,"IL":3.82414,"IT":0.64754,"JM":73.73077,"JO":0.28293,"JP":102.05011,"KZ":153.34907,"KE":43.33202,"KG":20.30701,"KH":1386.32173,"KI":1.06111,"KN":1.67052,"KR":854.09609,"KW":0.19273,"LA":2839.91279,"LB":3392.78811,"LR":0.43023,"LY":1.19239,"LC":1.76569,"LK":54.32924,"LS":6.07667,"LT":0.45777,"LU":0.85886,"LV":0.50897,"MO":4.91225,"MA":3.83652,"MD":6.16712,"MG":1178.56575,"MV":7.69596,"MX":10.40177,"MH":0.9382,"MK":19.01696,"ML":208.8976,"MT":0.57892,"MM":405.27042,"ME":0.34139,"MN":1010.45586,"MZ":23.78561,"MR":13.33784,"MU":16.38218,"MW":310.33443,"MY":1.58406,"NA":7.15452,"NE":250.14334,"NG":151.89677,"NI":11.5629,"NL":0.76996,"NO":9.51216,"NP":34.07884,"NR":1.2853,"NZ":1.45911,"OM":0.19822,"PK":41.76346,"PA":0.46155,"PE":1.86177,"PH":19.08037,"PW":0.79437,"PG":2.29119,"PL":1.82284,"PR":0.90168,"PT":0.56766,"PY":2675.06187,"PS":0.59098,"QA":2.37427,"RO":1.7119,"RU":27.24589,"RW":328.80391,"SA":1.76246,"SD":71.79533,"SN":233.77342,"SG":0.87816,"SB":6.777,"SL":2.95632,"SV":0.45988,"SM":0.68381,"SO":9278.94428,"RS":42.3813,"ST":11.01556,"SR":5.88677,"SK":0.53339,"SI":0.56319,"SE":8.72155,"SZ":6.02478,"SX":1.6037,"SC":7.19076,"TC":1.06217,"TD":241.73089,"TG":226.74656,"TH":11.9749,"TJ":2.40247,"TL":0.49367,"TO":1.48735,"TT":4.26255,"TN":0.92744,"TR":2.80788,"TV":1.40773,"TZ":923.77031,"UG":1304.81916,"UA":9.2192,"UY":30.41869,"US":1,"UZ":2457.05473,"VC":1.47869,"VN":7418.22874,"VU":107.83547,"WS":1.62377,"ZA":7.09805,"ZM":6.3746,"ZW":85.4559};

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
