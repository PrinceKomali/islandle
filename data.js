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
    }
];

let type_grammar = _ => ({"Administered": "by", "Part": "of", "Owned": "by", "Disputed": "between", "Territory": "of", "District": "of"})[_];