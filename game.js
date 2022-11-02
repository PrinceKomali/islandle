let island_img = document.querySelector(".island-img");
function drandom() {
    //stackoverflow.com/q/521295
    let str = window.btoa((new Date).toString().split(/\d\d:\d\d:\d\d/)[0]);
    let h1 = 1779033703, h2 = 3144134277,
        h3 = 1013904242, h4 = 2773480762;
    for (let i = 0, k; i < str.length; i++) {
        k = str.charCodeAt(i);
        h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
        h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
        h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
        h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
    }
    h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
    h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
    h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
    h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
    return (h1 ^ h2 ^ h3 ^ h4) >>> 0;
}

function fmt(a) {
    return a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g,'').trim();
}

class Islandle {
    constructor() {
        this.NOT_FOUND = 0;
        this.ALREADY_GUESSED = 1;
        this.INCORRECT = 2;
        this.CORRECT = 3;

        this.guesses = [];
        this.index = drandom() % ISLANDS.length;
        this.island = ISLANDS[this.index];
    }
    init () {
        let Island = ISLANDS[drandom() % ISLANDS.length];
        // for (let i of ISLANDS) {
        //     o = document.createElement("option");
        //     o.value = i.name;
        //     document.querySelector(".temp-datalist").appendChild(o)
        // }

        island_img.src = `images/${Island.image}`;
    }
    generateSquares(num_squares, guess_distance) {
        let percentage = Math.floor((Math.max(2_000_000-guess_distance*100,0)/2_000_000)*100);
        let squares = new Array(num_squares);
        let green = Math.floor(percentage / (100/num_squares));
        let yellow = Math.floor(guess_distance - green * (100/num_squares) >= (num_squares*2));
    
        squares.fill("🟩", 0, green);
        squares.fill("🟨", green, green + yellow);
        squares.fill("⬛", green+yellow);
        return {squares, percentage}
    }
    pushGuess(guessed) {
        //google.com/maps/search/?api=1&query=-37.1052%2C-12.2777
        this.guesses.push(guessed);
        let guess_elem = document.querySelectorAll(".guess")[this.guesses.length - 1];


        let guess_distance = distance(
            guessed.lat, guessed.long,
            this.island.lat, this.island.long
        );
        let guess_angle = angle(
            guessed.lat, guessed.long,
            this.island.lat, this.island.long
        );
        let { squares, percentage } = this.generateSquares(10, guess_distance);
        this.guesses[this.guesses.length - 1].share_data = [...this.generateSquares(5, guess_distance).squares, guess_angle].join("");
        let i = 0;
        let countup = 0;
        let _int = setInterval(_=>{
            let int_squares = new Array(10).fill('⬛');
            for(let j = 0; j < i; j++) int_squares[Math.floor(j/100*squares.length)] = squares[Math.floor(j/100*squares.length)]
            countup = i/100 * percentage;
            guess_elem.innerHTML = `<span class="squares">${int_squares.join("  ")}</span> <span class="countup">${Math.ceil(countup)}%</span>`;
            
            
            i++;
            if(i == 101) {
                clearInterval(_int);
                setTimeout(_=>{
                    guess_elem.innerHTML = 
                        `<span title="Guessed" class="island_name">${ guessed.name }</span>` +
                        `<span title="Angle" class="direction">${ guess_angle }</span>` + 
                        `<span title="Population" class="population" style="font-weight: bold">${guessed.population == this.island.population ? "=" : guessed.population < this.island.population ? ">" : "&lt;"}</span>` +
                        `<span title="Distance" class="countup">${ Number(guess_distance.toFixed(1)).toLocaleString() }km</span> ${
                        ''   }`

                }, 500)
            }
        }, 10)
        if(this.island.name == guessed.name) {
            return this.CORRECT;
        }
        else return this.INCORRECT;
    }
    guess(query) {
        let found = ISLANDS.find(x=>fmt(x.name) == fmt(query));
        if (!found) return this.NOT_FOUND;
        if (this.guesses.includes(found)) return this.ALREADY_GUESSED;

        return this.pushGuess(found);
    }
}
