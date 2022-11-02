let guess_btn = document.querySelector(".guess_btn");
let share_btn = document.querySelector(".share_btn");
let guess_input = document.querySelector(".guess_input");
let autocomplete = document.querySelector(".autocomplete");

let filtered = [];
let filtered_str = "";
let done = false;

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
    // TODO: handle errors

    let guesses_used_up = [...document.querySelectorAll(".guess")].filter(x=>x.innerText == "").length == 0;
    if(ret == Game.CORRECT || guesses_used_up) {
        done = true;
        guess_btn.style.display = "none";
        share_btn.style.display = "block";
        guess_input.readOnly = true;
        guess_input.placeholder = ret == Game.CORRECT ? "You got it!" : "Maybe next time!";
        let {island} = Game;
        setTimeout(_=>{
            let i = 0;
            autocomplete.innerHTML = '';
            let message = [
                `Answer: <b>${island.name}`,
                `${island.claims.type} ${type_grammar(island.claims.type)}`
            
            ];

            let _int = setInterval(_=> {
                if(message.length < 1) return clearInterval(_int);
                autocomplete.innerHTML += `${i < 1 ? "" : "<br>"}${message.shift()}`
                i++;
            }, 10);
        },100);
    }
}

function share() {
    let day_1 = new Date('11/2/22').getTime();
    let today = new Date().getTime();
    let time_diff = today - day_1;

    navigator.clipboard.writeText(
            `Islandle #${Math.round(time_diff / (1000 * 3600 * 24) + 1)} ${Game.guesses.length}/10\n` + 
            Game.guesses.map(x=>`${x.share_data}`).join("\n") + "\n" + 
            "https://islandle.komali.dev"
    ).then(_ => share_btn.innerText = "Copied!")
    .catch(_ => share_btn.innerText = "Failed to Copy!");
    setTimeout(_=>share_btn.innerText = "Share", 1000);
}

function filter_options(k) {
    if(done) return;
    let query = guess_input.value;
    if(query.trim() == "") {
        // TODO: add error
        return autocomplete.innerHTML = "Type something to filter results!";
    }
    filtered = ISLANDS.map(x=>x.name).filter(x=>
        new RegExp(fmt(query))
            .test(fmt(x)));
    let filtered_cp = [...filtered]
    filtered_str = filtered.length < 1 ? "No results" : `<b>${filtered_cp.shift()}</b>${filtered_cp.length < 1 ? "" : ", " + filtered_cp.join(`,`)}`
    autocomplete.innerHTML = filtered_str;
}