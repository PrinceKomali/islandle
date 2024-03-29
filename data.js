let ALL_ISLANDS; // ???

const ISLANDS = [
    {
        name: "Midway Atoll",
        image: "MidwayAtoll.png",
        lat: 28.2072,
        long: -177.3735,
        population: 0,
        claims: {
            countries: [ "us" ],
            type: "Administered",
        },
        territory: false,
        water: "tropical"
    },
    {
        name: "Johnston Atoll",
        image: "JohnstonAtoll.png",
        population: 0,
        lat: 16.7295,
        long: -169.5336,
        claims: {
            countries: [ "us" ],
            type: "Administered"
        },
        territory: false
    },
    {
        name: "North Island",
        image: "NorthIsland.png",
        population: 3922000,
        lat: -39.2378,
        long: 175.6024,
        claims: {
            countries: [ "nz" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Sulawesi",
        image: "Sulawesi.png",
        population: 19896951,
        lat: -1.8479,
        long: 120.5279,
        claims: {
            countries: ["id" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Tristan da Cunha",
        image: "TristanDaCunha.png",
        population: 264,
        lat: -37.1052,
        long: -12.2777,
        claims: {
            countries: [ "gb" ],
            type: "Territory"
        },
        territory: false
    },
    {
        name: "Novaya Zemlya",
        image: "NovayaZemlya.png",
        population: 2429,
        lat: 75.1667,
        long: 57.8333,
        claims: {
            countries: [ "ru" ],
            type: "District"
        },
        territory: false,
        water: "deep"
    },
    {
        name: "Nauru",
        image: "Nauru.png",
        population: 10873,
        lat: -0.5228,
        long: 166.9315,
        claims: {
            countries: [ "nr" ],
            type: "Independent"
        },
        territory: "nr"
    },
    {
        name: "Socatra",
        image: "Socatra.png",
        population: 44120,
        lat: 12.4634,
        long: 53.8237,
        claims: {
            countries: [ "ye" ],
            type: "Administered"
        },
        territory: false
    },
    {
        name: "South Georgia",
        image: "SouthGeorgia.png",
        population: 35,
        lat: -54.4138,
        long: -36.5827,
        claims: {
            countries: [ "gb" ],
            type: "Territory"
        },
        territory: "gs",
        water: "deep"
    },
    {
        name: "Bermuda",
        image: "Bermuda.png",
        population: 63867,
        lat: 32.3078,
        long: -64.7505,
        claims: {
            countries: [ "gb" ],
            type: "Territory"
        },
        territory: "bm"
    },
    {
        name: "Prince Edward Islands (ZA)",
        image: "PrinceEdwardIslands.png",
        population: 0,
        lat: -46.88,
        long: 37.75,
        claims: {
            countries: [ "za" ],
            type: "Administered"
        },
        territory: false
    },
    {
        name: "Saint Martin/Sint Maarten",
        image: "SaintMartin.png",
        population: 40204 + 42846, 
        lat: 18.0632 ,
        long: -63.0501,
        claims: {
            countries: [ "nl", "fr", ],
            type: "Shared"
        },
        territory: "sx",
        water: "tropical"
    },
    {
        name: "Prince Edward Island (CA)",
        image: "PrinceEdwardIsland.png",
        population: 156947,
        lat: 46.5107,
        long: -63.4168,
        claims: {
            countries: [ "ca" ],
            type: "Part"
        },
        territory: false,
        water: "green"
    },
    {
        name: "Madeira",
        image: "Madeira.png",
        population: 253945,
        lat: 32.7607,
        long: -16.9595,
        claims: {
            countries: [ "pt" ],
            type: "Autonomous Region"
        },
        territory: false
    },
    {
        name: "Diego Garcia",
        image: "DiegoGarcia.png",
        population: 4239,
        lat: -7.3195,
        long: 72.4229,
        claims: {
            countries: [ "gb", "mu" ],
            type: "Disputed"
        },
        territory: "io"
    },
    {
        name: "Andros",
        image: "Andros.png",
        population: 7490,
        lat: 24.7064,
        long: -78.0195,
        claims: {
            countries: [ "bs" ],
            type: "Part"
        },
        territory: false,
        water: "tropical"
    },
    {
        name: "Hispaniola",
        image: "Hispaniola.png",
        population: 22278000,
        lat: 19.0019,
        long: -71.5724,
        claims: {
            countries: [ "ht", "do" ],
            type: "Shared"
        },
        territory: false
    },
    {
        name: "Tasmania",
        image: "Tasmania.png",
        population: 541071,
        lat: -42.0409,
        long: 146.8087,
        claims: {
            countries: [ "au" ],
            type: "State"
        },
        territory: false

    },
    {
        name: "Wake Island",
        image: "WakeIsland.png",
        population: 150,
        lat: 19.2796,
        long: 166.6499,
        claims: {
            countries: [ "us", "mh" ],
            type: "Disputed"
        },
        territory: false,
        water: "deep"
    },
    {
        name: "Bougainville Island",
        image: "BougainvilleIsland.png",
        population: 349358,
        lat: -6.3754,
        long: 155.3807,
        claims: {
            countries: [ "pg" ],
            type: "Autonomous Region"
        },
        territory: false
    },
    {
        name: "Crete",
        image: "Crete.png",
        population: 650000,
        lat: 35.2401,
        long: 24.8093,
        claims: {
            countries: [ "gr" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Saba",
        image: "Saba.png",
        population: 1933,
        lat: 17.6355,
        long: -63.2327,
        claims: {
            countries: [ "nl" ],
            type: "Municipality"
        },
        territory: false
    },
    {
        name: "Saint Barthélemy",
        image: "SaintBarthelemy.png",
        population: 9131,
        lat: 17.9000,
        long: -62.8333,
        claims: {
            countries: [ "fr" ],
            type: "Overseas Collectivity"
        },
        territory: "bl",
        water: "tropical"
    },
    {
        name: "Sint Eustatius",
        image: "SintEustatius.png",
        population: 3183,
        lat: 17.4890,
        long: -62.9736,
        claims: {
            countries: [ "nl" ],
            type: "Municipality"
        },
        territory: false
    },
    {
        name: "Long Island",
        image: "LongIsland.png",
        population: 8063232,
        lat: 40.7891,
        long: -73.1350,
        claims: {
            countries: [ "us" ],
            type: "Part"
        },
        territory: false,
        water: "green"
    },
    {
        name: "Saint Thomas",
        image: "SaintThomas.png",
        population: 42261,
        lat: 18.3381,
        long: -64.8941,
        claims: {
            countries: [ "vi" ], // yes totally a country
            type: "Part"
        },
        territory: false
    },
    {
        name: "Saint John",
        image: "SaintJohn.png",
        population: 20800,
        lat: 18.3368,
        long: -64.7281,
        claims: {
            countries: [ "vi" ], // yEs
            type: "Part"
        },
        territory: false
    },
    {
        name: "Saint Croix",
        image: "SaintCroix.png",
        population: 41004,
        lat: 17.7246,
        long: -64.8348,
        claims: {
            countries: [ "vi" ], // mOre
            type: "Part"
        },
        territory: false,
        water: "tropical"
    },
    {
        name: "Java",
        image: "Java.png",
        population: 148756685,
        lat: -7.6145,
        long: 110.7122,
        claims: {
            countries: [ "id" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Puerto Rico",
        image: "PuertoRico.png",
        population: 2687049,
        lat: 18.2208,
        long: -66.5901,
        claims: {
            countries: [ "us" ],
            type: "Territory"
        },
        territory: "pr"
    },
    {
        name: "Niue",
        image: "Niue.png",
        population: 1620,
        lat: -19.0544,
        long: -169.8672,
        claims: {
            countries: [ "nz" ],
            type: "Territory"
        },
        territory: "nu"
    },
    {
        name: "Shetland",
        image: "Shetland.png",
        population: 22990,
        lat: 60.3470,
        long: -1.2357,
        claims: {
            countries: [ "gb-sct" ], // Using flagcdn for now
            type: "Part"
        },
        territory: false,
        water: "deep"
    },
    {
        name: "Great Britain",
        image: "GreatBritain.png",
        population: 67508936,
        lat: 55.3781,
        long: -3.4360,
        claims: {
            countries: [ "gb" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Kerguelen Islands",
        image: "KerguelenIslands.png", // this took FOREVER
        population: 130,
        lat: -49.3948,
        long: 69.3545,
        claims: {
            countries: [ "tf" ], // should probably rename this key
            type: "Part"
        },
        territory: false,
        water: "deep"
    },
    {
        name: "Kiritimati",
        image: "Kiritimati.png",
        population: 6456,
        lat: 1.8721,
        long: -157.4278,
        claims: {
            countries: [ "ki" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Singapore",
        image: "Singapore.png",
        population: 5958256,
        lat: 1.3521,
        long: 103.8198,
        claims: {
            countries: [ "sg" ],
            type: "Independent"
        },
        territory: "sg",
        water: "green"
    },
    {
        name: "Iceland",
        image: "Iceland.png",
        population: 376248,
        lat: 64.9631,
        long: -19.0208,
        claims: {
            countries: [ "is" ],
            type: "Independent"
        },
        territory: "is"
    },
    {
        name: "Saint Lucia",
        image: "SaintLucia.png",
        population: 185595,
        lat: 13.9094,
        long: -60.9789,
        claims: {
            countries: [ "lc" ],
            type: "Independent"
        },
        territory: "lc",
        water: "tropical"
    },
    {
        name: "Mauritius",
        image: "Mauritius.png",
        population: 1276722,
        lat: -20.3484,
        long: 57.5522,
        claims: {
            countries: [ "mu" ],
            type: "Independent"
        },
        territory: "mu"
    },
    {
        name: "Mahé",
        image: "Mahe.png",
        population: 95000,
        lat: -4.6827,
        long: 55.4804,
        claims: {
            countries: [ "sc" ],
            type: "Part"
        },
        territory: false,
        water: "tropical"
    },
    {
        name: "Isla Grande de Tierra del Fuego",
        image: "IslaGrandeDeTierraDelFuego.png", // This filename brings me pain
        population: 133902,
        lat: -54.0460,
        long: -68.5722,
        claims: {
            countries: [ "ar", "cl" ],
            type: "Shared"
        },
        territory: false,
        water: "deep"
    },
    {
        name: "Hawai'i",
        image: "Hawaii.png",
        population: 186738,
        lat: 19.5429,
        long: -155.6659, 
        claims: {
            countries: [ "us" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Oahu",
        image: "Oahu.png",
        population:	1016508,
        lat: 21.4389,
        long: -158.0001,
        claims: {
            countries: [ "us" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Bouvet Island",
        image: "BouvetIsland.png",
        population: 0,
        lat: -54.4208,
        long: 3.3464,
        claims: {
            countries: [ "no" ],
            type: "Territory"
        },
        territory: false, // Yes I know it technically is BV but it doesn't have it's own flag so it'd look weird
        water: "deep"
    },
    {
        name: "Pohnpei",
        image: "Pohnpei.png",
        population: 35981,
        lat: 6.8541,
        long: 158.2624,
        claims: {
            countries: [ "fm" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Easter Island",
        image: "EasterIsland.png",
        population: 8601,
        lat: -27.1127,
        long: -109.3497,
        claims: {
            countries: [ "cl" ],
            type: "District"
        },
        territory: false
    },
    {
        name: "Cocos (Keeling) Islands",
        image: "CocosKeelingIslands.png", // TODO: revisit this image
        population: 544,
        lat: -12.1642,
        long: 96.8710,
        claims: {
            countries: [ "au" ],
            type: "Territory"
        },
        territory: "cc"
    },
    {
        name: "Montserrat",
        image: "Montserrat.png",
        population: 4999,
        lat: 16.7494,
        long: -62.1927,
        claims: {
            countries: [ "gb" ],
            type: "Territory"
        },
        territory: "ms"
    },
    {
        name: "Jersey",
        image: "Jersey.png", //TODO: revisit this too (rocks look weird)
        population: 103267,
        lat: 49.2138,
        long: -2.1358,
        claims: {
            countries: [ "gb" ],
            type: "Crown Dependency"
        },
        territory: "je"
    },
    {
        name: "Isle of Man",
        image: "IsleOfMan.png",
        population: 86089,
        lat: 54.2361,
        long: -4.5481,
        claims: {
            countries: [ "gb" ],
            type: "Crown Dependency"
        },
        territory: "im"
    },
    {
        name: "Christmas Island",
        image: "ChristmasIsland.png",
        population: 1843,
        lat: -10.4475,
        long: 105.6904,
        claims: {
            countries: [ "au" ],
            type: "Territory"
        },
        territory: "cx"
    },
    {
        name: "Rodrigues",
        image: "Rodrigues.png",
        population: 41669,
        lat: -19.7245,
        long: 63.4272,
        claims: {
            countries: [ "mu" ],
            type: "Autonomous Region"
        },
        territory: false
    },
    {
        name: "Heard Island",
        image: "HeardIsland.png",
        population: 0,
        lat: -53.0818, 
        long: 73.5042,
        claims: {
            countries: [ "hm" ],
            type: "Territory"
        },
        territory: false, // Again, yes I know HM is the code for it but it doesn't have a distinct flag 
        water: "deep"
    },
    {
        name: "Hainan",
        image: "Hainan.png",
        population: 10081232,
        lat: 20.0200,
        long: 110.3486,
        claims: {
            countries: [ "cn" ],
            type: "Province"
        },
        territory: false
    },
    {
        name: "Barbados",
        image: "Barbados.png",
        population: 288212,
        lat: 13.1939,
        long: -59.5432,
        claims: {
            countries: [ "bb" ],
            type: "Independent"
        },
        territory: "bb",
        water: "tropical"
    },
    {
        name: "Antigua",
        image: "Antigua.png",
        population: 93219,
        lat: 17.0747,
        long: -61.8175,
        claims: {
            countries: [ "ag" ],
            type: "Part"
        },
        territory: false,
        water: "tropical"

    },
    {
        name: "Barbuda",
        image: "Barbuda.png",
        population: 1634,
        lat: 17.6266,
        long: -61.7713,
        claims: {
            countries: [ "ag" ],
            type: "Part"
        },
        territory: false,
        water: "tropical"
        
    },
    {
        name: "Curaçao",
        image: "Curacao.png",
        population: 165694,
        lat: 12.1696,
        long: -68.9900,
        claims: {
            countries: [ "nl" ],
            type: "Constitute Country"
        },
        territory: "cw"
    },
    {
        name: "Bonaire",
        image: "Bonaire.png",
        population: 26805,
        lat: 12.2019,
        long: -68.2624,
        claims: {
            countries: [ "nl" ],
            type: "Municipality"
        },
        territory: "bq"
    },
    {
        name: "Saint Helena",
        image: "SaintHelena.png",
        population: 6120,
        lat: -15.9650,
        long: -5.7089,
        claims: {
            countries: [ "gb" ],
            type: "Territory"
        },
        territory: "sh"
    },
    {
        name: "Majuro",
        image: "Majuro.png",
        population: 27797,
        lat: 7.0667,
        long: 171.2667,
        claims: {
            countries: [ "mh" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Tahiti",
        image: "Tahiti.png",
        population: 189517,
        lat: -17.6509,
        long: -149.4260,
        claims: {
            countries: [ "pf" ], // :)
            type: "Part"
        } ,
        territory: false
    },
    {
        name: "Mayotte",
        image: "Mayotte.png",
        population: 289164,
        lat: -12.8275,
        long: 45.1662,
        claims: {
            countries: [ "fr" ],
            type: "Overseas Collectivity"
        },
        territory: "yt"
    },
    {
        name: "Canary Islands",
        image: "CanaryIslands.png",
        population: 2252465,
        lat: 28.2916,
        long: -16.6291,
        claims: {
            countries: [ "es" ],
            type: "Autonomous Region"
        },
        territory: false // even though it has its own country code... ??? why
    },
    {
        name: "Açores",
        image: "Acores.png",
        population: 236440,
        lat: 37.7412,
        long: -25.6756,
        claims: {
            countries: [ "pt" ],
            type: "Autonomous Region"
        },
        territory: false
    },
    {
        name: "Island of Montreal",
        image: "IslandOfMontreal.png",
        population: 4277000,
        lat: 45.5126,
        long: -73.6802,
        claims: {
            countries: [ "ca-qc" ], // flagpedia SHOULD have this flag (but it doesn't so i had to make it from scratch >:I ) 
            type: "Part"
        },
        territory: false,
        water: "green"
    },
    {
        name: "Galápagos Islands",
        image: "GalapagosIslands.png",
        population: 25000, // TODO: update with better number
        lat: -0.9538,
        long: -90.9656,
        claims: {
            countries: [ "ec" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Kure Atoll",
        image: "KureAtoll.png",
        population: 0,
        lat: 28.3925,
        long: -178.2936,
        claims: {
            countries: [ "us" ],
            type: "Part",
        },
        territory: false,
        water: "tropical"
    },
    {
        name: "Palmyra Atoll",
        image: "PalmyraAtoll.png",
        population: 4,
        lat: 5.8885,
        long: -162.0787,
        claims: {
            countries: [ "us" ],
            type: "Administered"
        },
        territory: false
    },
    {
        name: "Funafuti",
        image: "Funafuti.png",
        population: 7348,
        lat: -8.5211,
        long: 179.1962,
        claims: {
            countries: [ "tv" ],
            type: "Part"
        },
        territory: false
    }
];
// Work on adding images to these
let ISLANDS_NO_IMG = [
    {
        name: "Jan Mayen",
        image: false, // why is it GREEN
        population: 0,
        lat: 71.0318,
        long: -8.2920,
        claims: {
            countries: [ "no" ],
            type: "Administered"
        },
        territory: false,
        water: "deep"
    }, 
    {
        name: "Ascension Island",
        image: false, // rendering error?
        population: 880,
        lat: -7.9467,
        long: -14.3559,
        claims: {
            countries: [ "gb" ],
            type: "Territory"
        },
        territory: false
    },
    {
        name: "Lord Howe Island",
        image: false, // big yellow spot 
        population: 382,
        lat: -31.5553,
        long: 159.0821,
        claims: {
            countries: [ "au" ],
            type: "Part"
        },
        territory: false
    },
    {
        name: "Faroe Islands",
        image: false, // the HECK is going on here
        population: 49315,
        lat: 61.8926,
        long: -6.9118,
        claims: {
            countries: [ "dk" ],
            type: "Territory"
        },
        territory: "fo",
        water: "deep"
    }
    
];

// generator.py
ISLANDS_NO_IMG = [...ISLANDS_NO_IMG, {"name": "Taiwan", "image": false, "population": 23816775, "lat": 23.5, "long": 121.0, "claims": {"countries": ["tw"], "type": "Independent"}, "territory": "tw"}, {"name": "Sri Lanka", "image": false, "population": 21413249, "lat": 7.0, "long": 81.0, "claims": {"countries": ["lk"], "type": "Independent"}, "territory": "lk"}, {"name": "Ireland", "image": false, "population": 4937786, "lat": 53.0, "long": -8.0, "claims": {"countries": ["ie"], "type": "Independent"}, "territory": "ie"}, {"name": "Jamaica", "image": false, "population": 2961167, "lat": 18.25, "long": -77.5, "claims": {"countries": ["jm"], "type": "Independent"}, "territory": "jm"}, {"name": "Bahrain", "image": false, "population": 1701575, "lat": 26.0, "long": 50.55, "claims": {"countries": ["bh"], "type": "Independent"}, "territory": "bh"}, {"name": "Cyprus", "image": false, "population": 1207359, "lat": 35.0, "long": 33.0, "claims": {"countries": ["cy"], "type": "Independent"}, "territory": "cy"}, {"name": "R\u00e9union", "image": false, "population": 895312, "lat": -21.15, "long": 55.5, "claims": {"countries": ["fr"], "type": "Dependency"}, "territory": "re"}, {"name": "Malta", "image": false, "population": 441543, "lat": 35.9375, "long": 14.3754, "claims": {"countries": ["mt"], "type": "Independent"}, "territory": "mt"}, {"name": "Guadeloupe", "image": false, "population": 400124, "lat": 16.25, "long": -61.583333, "claims": {"countries": ["fr"], "type": "Dependency"}, "territory": "gp"}, {"name": "Martinique", "image": false, "population": 375265, "lat": 14.666667, "long": -61.0, "claims": {"countries": ["fr"], "type": "Dependency"}, "territory": "mq"}, {"name": "Guam", "image": false, "population": 168775, "lat": 13.46666666, "long": 144.78333333, "claims": {"countries": ["us"], "type": "Administered"}, "territory": "gu"}, {"name": "Grenada", "image": false, "population": 112523, "lat": 12.11666666, "long": -61.66666666, "claims": {"countries": ["gd"], "type": "Independent"}, "territory": "gd"}, {"name": "Aruba", "image": false, "population": 106766, "lat": 12.5, "long": -69.96666666, "claims": {"countries": ["nl"], "type": "Constitute Country"}, "territory": "aw"}, {"name": "Dominica", "image": false, "population": 71986, "lat": 15.41666666, "long": -61.33333333, "claims": {"countries": ["dm"], "type": "Independent"}, "territory": "dm"}, {"name": "Anguilla", "image": false, "population": 15003, "lat": 18.25, "long": -63.16666666, "claims": {"countries": ["gb"], "type": "Territory"}, "territory": "ai"}, {"name": "Cuba", "image": false, "population": 11326616, "lat": 21.5, "long": -80.0, "claims": {"countries": ["cu"], "type": "Independent"}, "territory": "cu"}]

ALL_ISLANDS = [...ISLANDS, ...ISLANDS_NO_IMG]

if(typeof process != "undefined") {
    if(process.argv[2] == "l") console.log(`{"type": "FeatureCollection","features":[` + (process.argv.includes("a") ? ALL_ISLANDS : ISLANDS).map(x=>`{"type": "Feature","geometry": {"type": "Point","coordinates": [${x.long},${x.lat}]},"properties": {"name": "${x.name}"}}`).join(",") + ']}'); // for https://geojson.io 
    else console.log(process.argv.includes("a") ? ALL_ISLANDS.length : ISLANDS.length); // for reference
}

let type_grammar = _ => ({"Administered": "by", "Part": "of", "Owned": "by", "Disputed": "between", "Shared": "between", "Territory": "of", "District": "of", "Province": "of", "Autonomous Region": "in", "State": "of", "Municipality": "of", "Overseas Collectivity": "of", "Crown Dependency": "of", "Constitute Country": "of", "Special Administrative Region": "in"})[_]; // Potentially the greatest function I've ever writte
