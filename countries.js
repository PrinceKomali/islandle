// credit: restcountries.com
let countries = [
  {
    "code": "BB",
    "name": "Barbados"
  },
  {
    "code": "IO",
    "name": "British Indian Ocean Territory"
  },
  {
    "code": "CG",
    "name": "Republic of the Congo"
  },
  {
    "code": "BR",
    "name": "Brazil"
  },
  {
    "code": "LU",
    "name": "Luxembourg"
  },
  {
    "code": "VI",
    "name": "United States Virgin Islands"
  },
  {
    "code": "KI",
    "name": "Kiribati"
  },
  {
    "code": "RO",
    "name": "Romania"
  },
  {
    "code": "LA",
    "name": "Laos"
  },
  {
    "code": "MT",
    "name": "Malta"
  },
  {
    "code": "TG",
    "name": "Togo"
  },
  {
    "code": "IQ",
    "name": "Iraq"
  },
  {
    "code": "KE",
    "name": "Kenya"
  },
  {
    "code": "KY",
    "name": "Cayman Islands"
  },
  {
    "code": "GN",
    "name": "Guinea"
  },
  {
    "code": "US",
    "name": "United States"
  },
  {
    "code": "TN",
    "name": "Tunisia"
  },
  {
    "code": "BO",
    "name": "Bolivia"
  },
  {
    "code": "CN",
    "name": "China"
  },
  {
    "code": "KR",
    "name": "South Korea"
  },
  {
    "code": "KW",
    "name": "Kuwait"
  },
  {
    "code": "DZ",
    "name": "Algeria"
  },
  {
    "code": "AW",
    "name": "Aruba"
  },
  {
    "code": "RU",
    "name": "Russia"
  },
  {
    "code": "DK",
    "name": "Denmark"
  },
  {
    "code": "LT",
    "name": "Lithuania"
  },
  {
    "code": "GB",
    "name": "United Kingdom"
  },
  {
    "code": "EE",
    "name": "Estonia"
  },
  {
    "code": "TW",
    "name": "Taiwan"
  },
  {
    "code": "CA",
    "name": "Canada"
  },
  {
    "code": "FJ",
    "name": "Fiji"
  },
  {
    "code": "PF",
    "name": "French Polynesia"
  },
  {
    "code": "PE",
    "name": "Peru"
  },
  {
    "code": "AU",
    "name": "Australia"
  },
  {
    "code": "CL",
    "name": "Chile"
  },
  {
    "code": "YT",
    "name": "Mayotte"
  },
  {
    "code": "EG",
    "name": "Egypt"
  },
  {
    "code": "PR",
    "name": "Puerto Rico"
  },
  {
    "code": "MK",
    "name": "North Macedonia"
  },
  {
    "code": "BD",
    "name": "Bangladesh"
  },
  {
    "code": "MF",
    "name": "Saint Martin"
  },
  {
    "code": "SG",
    "name": "Singapore"
  },
  {
    "code": "GA",
    "name": "Gabon"
  },
  {
    "code": "PT",
    "name": "Portugal"
  },
  {
    "code": "ET",
    "name": "Ethiopia"
  },
  {
    "code": "BS",
    "name": "Bahamas"
  },
  {
    "code": "VA",
    "name": "Vatican City"
  },
  {
    "code": "BF",
    "name": "Burkina Faso"
  },
  {
    "code": "TM",
    "name": "Turkmenistan"
  },
  {
    "code": "MP",
    "name": "Northern Mariana Islands"
  },
  {
    "code": "SX",
    "name": "Sint Maarten"
  },
  {
    "code": "ZM",
    "name": "Zambia"
  },
  {
    "code": "HN",
    "name": "Honduras"
  },
  {
    "code": "MA",
    "name": "Morocco"
  },
  {
    "code": "NP",
    "name": "Nepal"
  },
  {
    "code": "AG",
    "name": "Antigua and Barbuda"
  },
  {
    "code": "OM",
    "name": "Oman"
  },
  {
    "code": "HK",
    "name": "Hong Kong"
  },
  {
    "code": "GL",
    "name": "Greenland"
  },
  {
    "code": "PY",
    "name": "Paraguay"
  },
  {
    "code": "MD",
    "name": "Moldova"
  },
  {
    "code": "NC",
    "name": "New Caledonia"
  },
  {
    "code": "KG",
    "name": "Kyrgyzstan"
  },
  {
    "code": "MU",
    "name": "Mauritius"
  },
  {
    "code": "BT",
    "name": "Bhutan"
  },
  {
    "code": "CF",
    "name": "Central African Republic"
  },
  {
    "code": "BL",
    "name": "Saint Barthélemy"
  },
  {
    "code": "CY",
    "name": "Cyprus"
  },
  {
    "code": "RE",
    "name": "Réunion"
  },
  {
    "code": "TD",
    "name": "Chad"
  },
  {
    "code": "GR",
    "name": "Greece"
  },
  {
    "code": "MS",
    "name": "Montserrat"
  },
  {
    "code": "YE",
    "name": "Yemen"
  },
  {
    "code": "IM",
    "name": "Isle of Man"
  },
  {
    "code": "DO",
    "name": "Dominican Republic"
  },
  {
    "code": "GG",
    "name": "Guernsey"
  },
  {
    "code": "LR",
    "name": "Liberia"
  },
  {
    "code": "ZW",
    "name": "Zimbabwe"
  },
  {
    "code": "GP",
    "name": "Guadeloupe"
  },
  {
    "code": "UG",
    "name": "Uganda"
  },
  {
    "code": "VU",
    "name": "Vanuatu"
  },
  {
    "code": "UM",
    "name": "United States Minor Outlying Islands"
  },
  {
    "code": "PS",
    "name": "Palestine"
  },
  {
    "code": "PK",
    "name": "Pakistan"
  },
  {
    "code": "HM",
    "name": "Heard Island and McDonald Islands"
  },
  {
    "code": "IN",
    "name": "India"
  },
  {
    "code": "BN",
    "name": "Brunei"
  },
  {
    "code": "AE",
    "name": "United Arab Emirates"
  },
  {
    "code": "EC",
    "name": "Ecuador"
  },
  {
    "code": "GE",
    "name": "Georgia"
  },
  {
    "code": "GU",
    "name": "Guam"
  },
  {
    "code": "SC",
    "name": "Seychelles"
  },
  {
    "code": "FK",
    "name": "Falkland Islands"
  },
  {
    "code": "GI",
    "name": "Gibraltar"
  },
  {
    "code": "SB",
    "name": "Solomon Islands"
  },
  {
    "code": "UZ",
    "name": "Uzbekistan"
  },
  {
    "code": "MN",
    "name": "Mongolia"
  },
  {
    "code": "GY",
    "name": "Guyana"
  },
  {
    "code": "BA",
    "name": "Bosnia and Herzegovina"
  },
  {
    "code": "TO",
    "name": "Tonga"
  },
  {
    "code": "FR",
    "name": "France"
  },
  {
    "code": "SI",
    "name": "Slovenia"
  },
  {
    "code": "RW",
    "name": "Rwanda"
  },
  {
    "code": "BG",
    "name": "Bulgaria"
  },
  {
    "code": "TL",
    "name": "Timor-Leste"
  },
  {
    "code": "NG",
    "name": "Nigeria"
  },
  {
    "code": "GS",
    "name": "South Georgia"
  },
  {
    "code": "NR",
    "name": "Nauru"
  },
  {
    "code": "FO",
    "name": "Faroe Islands"
  },
  {
    "code": "AS",
    "name": "American Samoa"
  },
  {
    "code": "LS",
    "name": "Lesotho"
  },
  {
    "code": "ME",
    "name": "Montenegro"
  },
  {
    "code": "CV",
    "name": "Cape Verde"
  },
  {
    "code": "CM",
    "name": "Cameroon"
  },
  {
    "code": "KP",
    "name": "North Korea"
  },
  {
    "code": "CU",
    "name": "Cuba"
  },
  {
    "code": "SR",
    "name": "Suriname"
  },
  {
    "code": "NZ",
    "name": "New Zealand"
  },
  {
    "code": "MX",
    "name": "Mexico"
  },
  {
    "code": "MH",
    "name": "Marshall Islands"
  },
  {
    "code": "PH",
    "name": "Philippines"
  },
  {
    "code": "SE",
    "name": "Sweden"
  },
  {
    "code": "BV",
    "name": "Bouvet Island"
  },
  {
    "code": "JM",
    "name": "Jamaica"
  },
  {
    "code": "VE",
    "name": "Venezuela"
  },
  {
    "code": "JE",
    "name": "Jersey"
  },
  {
    "code": "AF",
    "name": "Afghanistan"
  },
  {
    "code": "MO",
    "name": "Macau"
  },
  {
    "code": "AX",
    "name": "Åland Islands"
  },
  {
    "code": "SY",
    "name": "Syria"
  },
  {
    "code": "ST",
    "name": "São Tomé and Príncipe"
  },
  {
    "code": "CH",
    "name": "Switzerland"
  },
  {
    "code": "SM",
    "name": "San Marino"
  },
  {
    "code": "SZ",
    "name": "Eswatini"
  },
  {
    "code": "VC",
    "name": "Saint Vincent and the Grenadines"
  },
  {
    "code": "MY",
    "name": "Malaysia"
  },
  {
    "code": "DE",
    "name": "Germany"
  },
  {
    "code": "PL",
    "name": "Poland"
  },
  {
    "code": "GD",
    "name": "Grenada"
  },
  {
    "code": "SS",
    "name": "South Sudan"
  },
  {
    "code": "BE",
    "name": "Belgium"
  },
  {
    "code": "KH",
    "name": "Cambodia"
  },
  {
    "code": "LK",
    "name": "Sri Lanka"
  },
  {
    "code": "CI",
    "name": "Ivory Coast"
  },
  {
    "code": "GH",
    "name": "Ghana"
  },
  {
    "code": "ER",
    "name": "Eritrea"
  },
  {
    "code": "BZ",
    "name": "Belize"
  },
  {
    "code": "CX",
    "name": "Christmas Island"
  },
  {
    "code": "GQ",
    "name": "Equatorial Guinea"
  },
  {
    "code": "TT",
    "name": "Trinidad and Tobago"
  },
  {
    "code": "CK",
    "name": "Cook Islands"
  },
  {
    "code": "ML",
    "name": "Mali"
  },
  {
    "code": "SH",
    "name": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "code": "CC",
    "name": "Cocos (Keeling) Islands"
  },
  {
    "code": "MZ",
    "name": "Mozambique"
  },
  {
    "code": "IR",
    "name": "Iran"
  },
  {
    "code": "CD",
    "name": "DR Congo"
  },
  {
    "code": "PW",
    "name": "Palau"
  },
  {
    "code": "MV",
    "name": "Maldives"
  },
  {
    "code": "BJ",
    "name": "Benin"
  },
  {
    "code": "JO",
    "name": "Jordan"
  },
  {
    "code": "MC",
    "name": "Monaco"
  },
  {
    "code": "MR",
    "name": "Mauritania"
  },
  {
    "code": "CZ",
    "name": "Czechia"
  },
  {
    "code": "BY",
    "name": "Belarus"
  },
  {
    "code": "AL",
    "name": "Albania"
  },
  {
    "code": "MW",
    "name": "Malawi"
  },
  {
    "code": "SO",
    "name": "Somalia"
  },
  {
    "code": "RS",
    "name": "Serbia"
  },
  {
    "code": "IS",
    "name": "Iceland"
  },
  {
    "code": "WS",
    "name": "Samoa"
  },
  {
    "code": "MM",
    "name": "Myanmar"
  },
  {
    "code": "TH",
    "name": "Thailand"
  },
  {
    "code": "LB",
    "name": "Lebanon"
  },
  {
    "code": "LV",
    "name": "Latvia"
  },
  {
    "code": "KZ",
    "name": "Kazakhstan"
  },
  {
    "code": "MQ",
    "name": "Martinique"
  },
  {
    "code": "PN",
    "name": "Pitcairn Islands"
  },
  {
    "code": "TV",
    "name": "Tuvalu"
  },
  {
    "code": "HU",
    "name": "Hungary"
  },
  {
    "code": "SJ",
    "name": "Svalbard and Jan Mayen"
  },
  {
    "code": "KM",
    "name": "Comoros"
  },
  {
    "code": "IL",
    "name": "Israel"
  },
  {
    "code": "SD",
    "name": "Sudan"
  },
  {
    "code": "AM",
    "name": "Armenia"
  },
  {
    "code": "UY",
    "name": "Uruguay"
  },
  {
    "code": "VG",
    "name": "British Virgin Islands"
  },
  {
    "code": "SA",
    "name": "Saudi Arabia"
  },
  {
    "code": "DM",
    "name": "Dominica"
  },
  {
    "code": "TK",
    "name": "Tokelau"
  },
  {
    "code": "BI",
    "name": "Burundi"
  },
  {
    "code": "UA",
    "name": "Ukraine"
  },
  {
    "code": "AT",
    "name": "Austria"
  },
  {
    "code": "SL",
    "name": "Sierra Leone"
  },
  {
    "code": "BM",
    "name": "Bermuda"
  },
  {
    "code": "NA",
    "name": "Namibia"
  },
  {
    "code": "NL",
    "name": "Netherlands"
  },
  {
    "code": "XK",
    "name": "Kosovo"
  },
  {
    "code": "HT",
    "name": "Haiti"
  },
  {
    "code": "ES",
    "name": "Spain"
  },
  {
    "code": "IE",
    "name": "Ireland"
  },
  {
    "code": "LY",
    "name": "Libya"
  },
  {
    "code": "PG",
    "name": "Papua New Guinea"
  },
  {
    "code": "LC",
    "name": "Saint Lucia"
  },
  {
    "code": "NF",
    "name": "Norfolk Island"
  },
  {
    "code": "AO",
    "name": "Angola"
  },
  {
    "code": "ID",
    "name": "Indonesia"
  },
  {
    "code": "NO",
    "name": "Norway"
  },
  {
    "code": "AR",
    "name": "Argentina"
  },
  {
    "code": "PA",
    "name": "Panama"
  },
  {
    "code": "JP",
    "name": "Japan"
  },
  {
    "code": "SV",
    "name": "El Salvador"
  },
  {
    "code": "AD",
    "name": "Andorra"
  },
  {
    "code": "NE",
    "name": "Niger"
  },
  {
    "code": "NI",
    "name": "Nicaragua"
  },
  {
    "code": "WF",
    "name": "Wallis and Futuna"
  },
  {
    "code": "IT",
    "name": "Italy"
  },
  {
    "code": "PM",
    "name": "Saint Pierre and Miquelon"
  },
  {
    "code": "GW",
    "name": "Guinea-Bissau"
  },
  {
    "code": "TZ",
    "name": "Tanzania"
  },
  {
    "code": "SK",
    "name": "Slovakia"
  },
  {
    "code": "TF",
    "name": "French Southern and Antarctic Lands"
  },
  {
    "code": "FI",
    "name": "Finland"
  },
  {
    "code": "LI",
    "name": "Liechtenstein"
  },
  {
    "code": "TJ",
    "name": "Tajikistan"
  },
  {
    "code": "GT",
    "name": "Guatemala"
  },
  {
    "code": "TC",
    "name": "Turks and Caicos Islands"
  },
  {
    "code": "AQ",
    "name": "Antarctica"
  },
  {
    "code": "BH",
    "name": "Bahrain"
  },
  {
    "code": "MG",
    "name": "Madagascar"
  },
  {
    "code": "EH",
    "name": "Western Sahara"
  },
  {
    "code": "FM",
    "name": "Micronesia"
  },
  {
    "code": "ZA",
    "name": "South Africa"
  },
  {
    "code": "BQ",
    "name": "Caribbean Netherlands"
  },
  {
    "code": "DJ",
    "name": "Djibouti"
  },
  {
    "code": "SN",
    "name": "Senegal"
  },
  {
    "code": "GM",
    "name": "Gambia"
  },
  {
    "code": "BW",
    "name": "Botswana"
  },
  {
    "code": "GF",
    "name": "French Guiana"
  },
  {
    "code": "KN",
    "name": "Saint Kitts and Nevis"
  },
  {
    "code": "TR",
    "name": "Turkey"
  },
  {
    "code": "AZ",
    "name": "Azerbaijan"
  },
  {
    "code": "CR",
    "name": "Costa Rica"
  },
  {
    "code": "CW",
    "name": "Curaçao"
  },
  {
    "code": "VN",
    "name": "Vietnam"
  },
  {
    "code": "HR",
    "name": "Croatia"
  },
  {
    "code": "NU",
    "name": "Niue"
  },
  {
    "code": "AI",
    "name": "Anguilla"
  },
  {
    "code": "QA",
    "name": "Qatar"
  },
  {
    "code": "CO",
    "name": "Colombia"
  },

  {
    "code": "GB-SCT",
    "name": "Scotland"
  }
]