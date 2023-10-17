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

	connectedCallback() {
		let code = this.fetchAutoCountryCode();
		let data = GeolocationDisplay.data[code?.toUpperCase()];
		if(data) {
			this.textContent = `${data.flag} ${data.name}`;
		}
	}
}

if("customElements" in window) {
	window.customElements.define("geolocation-display", GeolocationDisplay);
}
