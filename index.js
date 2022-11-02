let h2p = _ => document.querySelector(".h2p").style.display = "block";
let close_h2p = _ => document.querySelector(".h2p").style.display = "none"; 
let Game;


window.onload = _ => {
    Game = new Islandle;
    Game.init();
}


/*

Guess:


[][] | [][][][][]
$0 = correct continent? y/n
$1 = population > < =
$@ = proximity



*/

