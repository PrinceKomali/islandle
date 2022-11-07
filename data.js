const ISLANDS = [
    {
        name: "Midway Atoll",
        image: "MidwayAtoll.png",
        continent: "Oceania",
        lat: 28.2072,
        long: -177.3735,
        population: 0,
        claims: {
            countries: [ "us" ],
            type: "Administered",
        },
        territory: false
    },
    {
        name: "Johnston Atoll",
        image: "JohnstonAtoll.png",
        continent: "Oceania",
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
        continent: "Oceania",
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
        continent: "Asia",
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
        continent: "Africa",
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
        continent: "Europe",
        population: 2429,
        lat: 75.1667,
        long: 57.8333,
        claims: {
            countries: [ "ru" ],
            type: "District"
        },
        territory: false
    },
    {
        name: "Nauru",
        image: "Nauru.png",
        continent: "Oceania",
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
        territory: "gs"
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
        territory: "sx"

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
        territory: false
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
        population: 0,
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
        long: 78.0195,
        claims: {
            countries: [ "bs" ],
            type: "Part"
        },
        territory: false
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
            countries: [ "us" ],
            type: "Administered"
        },
        territory: false
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
            claims: [ "gr" ],
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
        territory: "bl"
    },
    {
        name: "Sint Eustatius",
        image: "SintEustatius.png",
        population: 3183,
        lat: 17.4890,
        long: -62.9736,
        claims: {
            countries: [ "nl" ],
            type: "Muncipality"
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
        territory: false
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
        lat: 45.2733,
        long: -66.0633,
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
        territory: false
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

];

if(typeof process != "undefined") console.log(ISLANDS.length); // for reference

let type_grammar = _ => ({"Administered": "by", "Part": "of", "Owned": "by", "Disputed": "between", "Shared": "between", "Territory": "of", "District": "of", "Autonomous Region": "in", "State": "of", "Municipality": "of", "Overseas Collectivity": "of"})[_]; // Potentially the greatest function I've ever written