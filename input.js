let guess_btn = document.querySelector(".guess_btn");
let share_btn = document.querySelector(".share_btn");
let guess_input = document.querySelector(".guess_input");
let autocomplete = document.querySelector(".autocomplete");

let filtered = [];
let filtered_str = "";

guess_input.addEventListener("keydown", k => {
    if(k.key == "Tab") {
        k.preventDefault();
        guess_input.value = filtered[0];
    }
    if(k.key == "Enter") {
        if(filtered.length > 0 && fmt(filtered[0]) != fmt(guess_input.value)) guess_input.value = filtered[0]; 
        else submit_guess();
    }
    filter_options(k)
});
guess_input.addEventListener("input", filter_options);

function submit_guess() {
    let query = guess_input.value;
    guess_input.value = "";
    let ret = Game.guess(query);
    if(ret == Game.NOT_FOUND) return autocomplete.innerHTML = "Island not found!";
    if(ret == Game.ALREADY_GUESSED) return autocomplete.innerHTML = "You've already guessed this!";
    let guesses_used_up = [...document.querySelectorAll(".guess")].filter(x=>x.innerText == "").length == 1;
    if(ret == Game.CORRECT || guesses_used_up) {
        Game.finish(ret);
    }
}

function share() {false
    let day_1 = new Date('11/7/22').getTime();
    let today = new Date().getTime();
    let time_diff = today - day_1;

    navigator.clipboard.writeText(
            `Islandle #${Math.floor(time_diff / (1000 * 3600 * 24) + 1)} ${Game.guesses[Game.guesses.length - 1] == Game.island ? Game.guesses.length : "X"}/10\n` + 
            Game.guesses.map(x=>`${x.share_data}`).join("\n") + "\n" + 
            "https://islandle.komali.dev"
    ).then(_ => share_btn.innerText = "Copied!")
    .catch(_ => share_btn.innerText = "Failed to Copy!");
    setTimeout(_=>share_btn.innerText = "Share", 1000);
}

function filter_options(k) {
    if(Game.done) return;
    let query = guess_input.value;
    if(query.trim() == "") {
        return autocomplete.innerHTML = "Type something to filter results!";
    }
    filtered = ISLANDS.map(x=>x.name).filter(x=>
        new RegExp(fmt(query))
            .test(fmt(x)));
    let filtered_cp = [...filtered]
    if(filtered_cp.length > 10) filtered_cp = [...filtered_cp.slice(0, 11), "..."];
    filtered_str = filtered.length < 1 ? "No results" : `<b>${filtered_cp.shift()}</b>${filtered_cp.length < 1 ? "" : ", " + filtered_cp.join(", ")}`
    autocomplete.innerHTML = filtered_str;
}