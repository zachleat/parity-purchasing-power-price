class GeolocationDisplay extends HTMLElement {
	static data = {"AW":{"name":"Aruba","flag":"🇦🇼"},"AF":{"name":"Afghanistan","flag":"🇦🇫"},"AO":{"name":"Angola","flag":"🇦🇴"},"AL":{"name":"Albania","flag":"🇦🇱"},"AE":{"name":"United Arab Emirates","flag":"🇦🇪"},"AR":{"name":"Argentina","flag":"🇦🇷"},"AM":{"name":"Armenia","flag":"🇦🇲"},"AG":{"name":"Antigua and Barbuda","flag":"🇦🇬"},"AU":{"name":"Australia","flag":"🇦🇺"},"AT":{"name":"Austria","flag":"🇦🇹"},"AZ":{"name":"Azerbaijan","flag":"🇦🇿"},"BI":{"name":"Burundi","flag":"🇧🇮"},"BE":{"name":"Belgium","flag":"🇧🇪"},"BJ":{"name":"Benin","flag":"🇧🇯"},"BF":{"name":"Burkina Faso","flag":"🇧🇫"},"BD":{"name":"Bangladesh","flag":"🇧🇩"},"BG":{"name":"Bulgaria","flag":"🇧🇬"},"BH":{"name":"Bahrain","flag":"🇧🇭"},"BS":{"name":"The Bahamas","flag":"🇧🇸"},"BA":{"name":"Bosnia and Herzegovina","flag":"🇧🇦"},"BY":{"name":"Belarus","flag":"🇧🇾"},"BZ":{"name":"Belize","flag":"🇧🇿"},"BM":{"name":"Bermuda","flag":"🇧🇲"},"BO":{"name":"Bolivia","flag":"🇧🇴"},"BR":{"name":"Brazil","flag":"🇧🇷"},"BB":{"name":"Barbados","flag":"🇧🇧"},"BN":{"name":"Brunei","flag":"🇧🇳"},"BT":{"name":"Bhutan","flag":"🇧🇹"},"BW":{"name":"Botswana","flag":"🇧🇼"},"CF":{"name":"Central African Republic","flag":"🇨🇫"},"CA":{"name":"Canada","flag":"🇨🇦"},"CH":{"name":"Switzerland","flag":"🇨🇭"},"CL":{"name":"Chile","flag":"🇨🇱"},"CN":{"name":"China","flag":"🇨🇳"},"CI":{"name":"Cote d'Ivoire","flag":"🇨🇮"},"CM":{"name":"Cameroon","flag":"🇨🇲"},"CD":{"name":"Democratic Republic of the Congo","flag":"🇨🇩"},"CG":{"name":"Republic of the Congo","flag":"🇨🇬"},"CO":{"name":"Colombia","flag":"🇨🇴"},"KM":{"name":"Comoros","flag":"🇰🇲"},"CV":{"name":"Cape Verde","flag":"🇨🇻"},"CR":{"name":"Costa Rica","flag":"🇨🇷"},"CW":{"name":"Curaçao","flag":"🇨🇼"},"KY":{"name":"Cayman Islands","flag":"🇰🇾"},"CY":{"name":"Cyprus","flag":"🇨🇾"},"CZ":{"name":"Czech Republic","flag":"🇨🇿"},"DE":{"name":"Germany","flag":"🇩🇪"},"DJ":{"name":"Djibouti","flag":"🇩🇯"},"DM":{"name":"Dominica","flag":"🇩🇲"},"DK":{"name":"Denmark","flag":"🇩🇰"},"DO":{"name":"Dominican Republic","flag":"🇩🇴"},"DZ":{"name":"Algeria","flag":"🇩🇿"},"EC":{"name":"Ecuador","flag":"🇪🇨"},"EG":{"name":"Egypt","flag":"🇪🇬"},"ES":{"name":"Spain","flag":"🇪🇸"},"EE":{"name":"Estonia","flag":"🇪🇪"},"ET":{"name":"Ethiopia","flag":"🇪🇹"},"FI":{"name":"Finland","flag":"🇫🇮"},"FJ":{"name":"Fiji","flag":"🇫🇯"},"FR":{"name":"France","flag":"🇫🇷"},"FM":{"name":"Federated States of Micronesia","flag":"🇫🇲"},"GA":{"name":"Gabon","flag":"🇬🇦"},"GB":{"name":"United Kingdom","flag":"🇬🇧"},"GE":{"name":"Georgia","flag":"🇬🇪"},"GH":{"name":"Ghana","flag":"🇬🇭"},"GN":{"name":"Guinea","flag":"🇬🇳"},"GM":{"name":"The Gambia","flag":"🇬🇲"},"GW":{"name":"Guinea-Bissau","flag":"🇬🇼"},"GQ":{"name":"Equatorial Guinea","flag":"🇬🇶"},"GR":{"name":"Greece","flag":"🇬🇷"},"GD":{"name":"Grenada","flag":"🇬🇩"},"GT":{"name":"Guatemala","flag":"🇬🇹"},"GY":{"name":"Guyana","flag":"🇬🇾"},"HK":{"name":"Hong Kong","flag":"🇭🇰"},"HN":{"name":"Honduras","flag":"🇭🇳"},"HR":{"name":"Croatia","flag":"🇭🇷"},"HT":{"name":"Haiti","flag":"🇭🇹"},"HU":{"name":"Hungary","flag":"🇭🇺"},"ID":{"name":"Indonesia","flag":"🇮🇩"},"IN":{"name":"India","flag":"🇮🇳"},"IE":{"name":"Ireland","flag":"🇮🇪"},"IR":{"name":"Iran","flag":"🇮🇷"},"IQ":{"name":"Iraq","flag":"🇮🇶"},"IS":{"name":"Iceland","flag":"🇮🇸"},"IL":{"name":"Israel","flag":"🇮🇱"},"IT":{"name":"Italy","flag":"🇮🇹"},"JM":{"name":"Jamaica","flag":"🇯🇲"},"JO":{"name":"Jordan","flag":"🇯🇴"},"JP":{"name":"Japan","flag":"🇯🇵"},"KZ":{"name":"Kazakhstan","flag":"🇰🇿"},"KE":{"name":"Kenya","flag":"🇰🇪"},"KG":{"name":"Kyrgyzstan","flag":"🇰🇬"},"KH":{"name":"Cambodia","flag":"🇰🇭"},"KI":{"name":"Kiribati","flag":"🇰🇮"},"KN":{"name":"Saint Kitts and Nevis","flag":"🇰🇳"},"KR":{"name":"South Korea","flag":"🇰🇷"},"KW":{"name":"Kuwait","flag":"🇰🇼"},"LA":{"name":"Laos","flag":"🇱🇦"},"LB":{"name":"Lebanon","flag":"🇱🇧"},"LR":{"name":"Liberia","flag":"🇱🇷"},"LY":{"name":"Libya","flag":"🇱🇾"},"LC":{"name":"Saint Lucia","flag":"🇱🇨"},"LK":{"name":"Sri Lanka","flag":"🇱🇰"},"LS":{"name":"Lesotho","flag":"🇱🇸"},"LT":{"name":"Lithuania","flag":"🇱🇹"},"LU":{"name":"Luxembourg","flag":"🇱🇺"},"LV":{"name":"Latvia","flag":"🇱🇻"},"MO":{"name":"Macau","flag":"🇲🇴"},"MA":{"name":"Morocco","flag":"🇲🇦"},"MD":{"name":"Moldova","flag":"🇲🇩"},"MG":{"name":"Madagascar","flag":"🇲🇬"},"MV":{"name":"Maldives","flag":"🇲🇻"},"MX":{"name":"Mexico","flag":"🇲🇽"},"MH":{"name":"Marshall Islands","flag":"🇲🇭"},"MK":{"name":"North Macedonia","flag":"🇲🇰"},"ML":{"name":"Mali","flag":"🇲🇱"},"MT":{"name":"Malta","flag":"🇲🇹"},"MM":{"name":"Myanmar (Burma)","flag":"🇲🇲"},"ME":{"name":"Montenegro","flag":"🇲🇪"},"MN":{"name":"Mongolia","flag":"🇲🇳"},"MZ":{"name":"Mozambique","flag":"🇲🇿"},"MR":{"name":"Mauritania","flag":"🇲🇷"},"MU":{"name":"Mauritius","flag":"🇲🇺"},"MW":{"name":"Malawi","flag":"🇲🇼"},"MY":{"name":"Malaysia","flag":"🇲🇾"},"NA":{"name":"Namibia","flag":"🇳🇦"},"NE":{"name":"Niger","flag":"🇳🇪"},"NG":{"name":"Nigeria","flag":"🇳🇬"},"NI":{"name":"Nicaragua","flag":"🇳🇮"},"NL":{"name":"Netherlands","flag":"🇳🇱"},"NO":{"name":"Norway","flag":"🇳🇴"},"NP":{"name":"Nepal","flag":"🇳🇵"},"NR":{"name":"Nauru","flag":"🇳🇷"},"NZ":{"name":"New Zealand","flag":"🇳🇿"},"OM":{"name":"Oman","flag":"🇴🇲"},"PK":{"name":"Pakistan","flag":"🇵🇰"},"PA":{"name":"Panama","flag":"🇵🇦"},"PE":{"name":"Peru","flag":"🇵🇪"},"PH":{"name":"Philippines","flag":"🇵🇭"},"PW":{"name":"Palau","flag":"🇵🇼"},"PG":{"name":"Papua New Guinea","flag":"🇵🇬"},"PL":{"name":"Poland","flag":"🇵🇱"},"PR":{"name":"Puerto Rico","flag":"🇵🇷"},"PT":{"name":"Portugal","flag":"🇵🇹"},"PY":{"name":"Paraguay","flag":"🇵🇾"},"PS":{"name":"Palestinian Territory","flag":"🇵🇸"},"QA":{"name":"Qatar","flag":"🇶🇦"},"RO":{"name":"Romania","flag":"🇷🇴"},"RU":{"name":"Russia","flag":"🇷🇺"},"RW":{"name":"Rwanda","flag":"🇷🇼"},"SA":{"name":"Saudi Arabia","flag":"🇸🇦"},"SD":{"name":"Sudan","flag":"🇸🇩"},"SN":{"name":"Senegal","flag":"🇸🇳"},"SG":{"name":"Singapore","flag":"🇸🇬"},"SB":{"name":"Solomon Islands","flag":"🇸🇧"},"SL":{"name":"Sierra Leone","flag":"🇸🇱"},"SV":{"name":"El Salvador","flag":"🇸🇻"},"SM":{"name":"San Marino","flag":"🇸🇲"},"SO":{"name":"Somalia","flag":"🇸🇴"},"RS":{"name":"Serbia","flag":"🇷🇸"},"ST":{"name":"Sao Tome and Principe","flag":"🇸🇹"},"SR":{"name":"Suriname","flag":"🇸🇷"},"SK":{"name":"Slovakia","flag":"🇸🇰"},"SI":{"name":"Slovenia","flag":"🇸🇮"},"SE":{"name":"Sweden","flag":"🇸🇪"},"SZ":{"name":"Eswatini","flag":"🇸🇿"},"SX":{"name":"Sint Maarten","flag":"🇸🇽"},"SC":{"name":"Seychelles","flag":"🇸🇨"},"TC":{"name":"Turks and Caicos Islands","flag":"🇹🇨"},"TD":{"name":"Chad","flag":"🇹🇩"},"TG":{"name":"Togo","flag":"🇹🇬"},"TH":{"name":"Thailand","flag":"🇹🇭"},"TJ":{"name":"Tajikistan","flag":"🇹🇯"},"TL":{"name":"Timor-Leste","flag":"🇹🇱"},"TO":{"name":"Tonga","flag":"🇹🇴"},"TT":{"name":"Trinidad and Tobago","flag":"🇹🇹"},"TN":{"name":"Tunisia","flag":"🇹🇳"},"TR":{"name":"Turkey","flag":"🇹🇷"},"TV":{"name":"Tuvalu","flag":"🇹🇻"},"TZ":{"name":"Tanzania","flag":"🇹🇿"},"UG":{"name":"Uganda","flag":"🇺🇬"},"UA":{"name":"Ukraine","flag":"🇺🇦"},"UY":{"name":"Uruguay","flag":"🇺🇾"},"US":{"name":"United States","flag":"🇺🇸"},"UZ":{"name":"Uzbekistan","flag":"🇺🇿"},"VC":{"name":"Saint Vincent and the Grenadines","flag":"🇻🇨"},"VN":{"name":"Vietnam","flag":"🇻🇳"},"VU":{"name":"Vanuatu","flag":"🇻🇺"},"WS":{"name":"Western Samoa","flag":"🇼🇸"},"ZA":{"name":"South Africa","flag":"🇿🇦"},"ZM":{"name":"Zambia","flag":"🇿🇲"},"ZW":{"name":"Zimbabwe","flag":"🇿🇼"}};

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
		let data = GeolocationDisplay.data[code];
		if(data) {
			this.textContent = `${data.flag} ${data.name}`;
		}
	}
}

if("customElements" in window) {
	window.customElements.define("geolocation-display", GeolocationDisplay);
}
