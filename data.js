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
            countries: [" id" ],
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
    //TODO: add sx
    {
        name: "Prince Edward Island (CA)",
        image: "PrinceEdwardIsland.png",
        population: 156947,
        lat: 46.5107,
        long: 63.4168,
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
        name: "DiegoGarcia",
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
    }
];

if(typeof process != "undefined") console.log(ISLANDS.length); // for reference

let type_grammar = _ => ({"Administered": "by", "Part": "of", "Owned": "by", "Disputed": "between", "Territory": "of", "District": "of", "Autonomous Region": "in"})[_];