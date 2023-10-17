class GeolocationDisplay extends HTMLElement {
	static data = "/* DATA INJECTION */";

	fetchAutoCountryCode() {
		// CloudCannon
		for(let cls of document.documentElement.classList) {
			if(cls.startsWith("country-")) {
				return cls.slice("country-".length);
			}
		}
	}

	getPrefix() {
		return this.getAttribute("prefix") || "";
	}

	getSuffix() {
		return this.getAttribute("suffix") || "";
	}

	connectedCallback() {
		let code = this.fetchAutoCountryCode()?.toUpperCase();
		let flag = GeolocationDisplay.data[code];
		if(code || flag) {
			this.textContent = `${this.getPrefix()}${code}${flag ? ` ${flag}` : ""}${this.getSuffix()}`;
		}
	}
}

if("customElements" in window) {
	window.customElements.define("geolocation-display", GeolocationDisplay);
}
