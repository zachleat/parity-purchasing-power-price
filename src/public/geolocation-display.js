/* geolocation-display Web Component */

class GeolocationDisplay extends HTMLElement {
	static data = {"AW":"🇦🇼","AF":"🇦🇫","AO":"🇦🇴","AL":"🇦🇱","AE":"🇦🇪","AR":"🇦🇷","AM":"🇦🇲","AG":"🇦🇬","AU":"🇦🇺","AT":"🇦🇹","AZ":"🇦🇿","BI":"🇧🇮","BE":"🇧🇪","BJ":"🇧🇯","BF":"🇧🇫","BD":"🇧🇩","BG":"🇧🇬","BH":"🇧🇭","BS":"🇧🇸","BA":"🇧🇦","BY":"🇧🇾","BZ":"🇧🇿","BM":"🇧🇲","BO":"🇧🇴","BR":"🇧🇷","BB":"🇧🇧","BN":"🇧🇳","BT":"🇧🇹","BW":"🇧🇼","CF":"🇨🇫","CA":"🇨🇦","CH":"🇨🇭","CL":"🇨🇱","CN":"🇨🇳","CI":"🇨🇮","CM":"🇨🇲","CD":"🇨🇩","CG":"🇨🇬","CO":"🇨🇴","KM":"🇰🇲","CV":"🇨🇻","CR":"🇨🇷","CW":"🇨🇼","KY":"🇰🇾","CY":"🇨🇾","CZ":"🇨🇿","DE":"🇩🇪","DJ":"🇩🇯","DM":"🇩🇲","DK":"🇩🇰","DO":"🇩🇴","DZ":"🇩🇿","EC":"🇪🇨","EG":"🇪🇬","ES":"🇪🇸","EE":"🇪🇪","ET":"🇪🇹","FI":"🇫🇮","FJ":"🇫🇯","FR":"🇫🇷","FM":"🇫🇲","GA":"🇬🇦","GB":"🇬🇧","GE":"🇬🇪","GH":"🇬🇭","GN":"🇬🇳","GM":"🇬🇲","GW":"🇬🇼","GQ":"🇬🇶","GR":"🇬🇷","GD":"🇬🇩","GT":"🇬🇹","GY":"🇬🇾","HK":"🇭🇰","HN":"🇭🇳","HR":"🇭🇷","HT":"🇭🇹","HU":"🇭🇺","ID":"🇮🇩","IN":"🇮🇳","IE":"🇮🇪","IR":"🇮🇷","IQ":"🇮🇶","IS":"🇮🇸","IL":"🇮🇱","IT":"🇮🇹","JM":"🇯🇲","JO":"🇯🇴","JP":"🇯🇵","KZ":"🇰🇿","KE":"🇰🇪","KG":"🇰🇬","KH":"🇰🇭","KI":"🇰🇮","KN":"🇰🇳","KR":"🇰🇷","KW":"🇰🇼","LA":"🇱🇦","LB":"🇱🇧","LR":"🇱🇷","LY":"🇱🇾","LC":"🇱🇨","LK":"🇱🇰","LS":"🇱🇸","LT":"🇱🇹","LU":"🇱🇺","LV":"🇱🇻","MO":"🇲🇴","MA":"🇲🇦","MD":"🇲🇩","MG":"🇲🇬","MV":"🇲🇻","MX":"🇲🇽","MH":"🇲🇭","MK":"🇲🇰","ML":"🇲🇱","MT":"🇲🇹","MM":"🇲🇲","ME":"🇲🇪","MN":"🇲🇳","MZ":"🇲🇿","MR":"🇲🇷","MU":"🇲🇺","MW":"🇲🇼","MY":"🇲🇾","NA":"🇳🇦","NE":"🇳🇪","NG":"🇳🇬","NI":"🇳🇮","NL":"🇳🇱","NO":"🇳🇴","NP":"🇳🇵","NR":"🇳🇷","NZ":"🇳🇿","OM":"🇴🇲","PK":"🇵🇰","PA":"🇵🇦","PE":"🇵🇪","PH":"🇵🇭","PW":"🇵🇼","PG":"🇵🇬","PL":"🇵🇱","PR":"🇵🇷","PT":"🇵🇹","PY":"🇵🇾","PS":"🇵🇸","QA":"🇶🇦","RO":"🇷🇴","RU":"🇷🇺","RW":"🇷🇼","SA":"🇸🇦","SD":"🇸🇩","SN":"🇸🇳","SG":"🇸🇬","SB":"🇸🇧","SL":"🇸🇱","SV":"🇸🇻","SM":"🇸🇲","SO":"🇸🇴","RS":"🇷🇸","ST":"🇸🇹","SR":"🇸🇷","SK":"🇸🇰","SI":"🇸🇮","SE":"🇸🇪","SZ":"🇸🇿","SX":"🇸🇽","SC":"🇸🇨","TC":"🇹🇨","TD":"🇹🇩","TG":"🇹🇬","TH":"🇹🇭","TJ":"🇹🇯","TL":"🇹🇱","TO":"🇹🇴","TT":"🇹🇹","TN":"🇹🇳","TR":"🇹🇷","TV":"🇹🇻","TZ":"🇹🇿","UG":"🇺🇬","UA":"🇺🇦","UY":"🇺🇾","US":"🇺🇸","UZ":"🇺🇿","VC":"🇻🇨","VN":"🇻🇳","VU":"🇻🇺","WS":"🇼🇸","ZA":"🇿🇦","ZM":"🇿🇲","ZW":"🇿🇼"};

	fetchAutoCountryCode() {
		// CloudCannon
		for(let cls of document.documentElement.classList) {
			if(cls.startsWith("country-")) {
				return cls.slice("country-".length);
			}
		}
	}

	connectedCallback() {
		let code = this.fetchAutoCountryCode()?.toUpperCase();
		let flag = GeolocationDisplay.data[code];
		if(code || flag) {
			this.textContent = `${code}${flag ? ` ${flag}` : ""}`;
		}
	}
}

if("customElements" in window) {
	window.customElements.define("geolocation-display", GeolocationDisplay);
}
