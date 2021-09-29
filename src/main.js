import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

let btnEnter = document.querySelector("#btn-enter");
btnEnter.addEventListener("click", nextPage);

function nextPage(){
    document.querySelector(".pag1").style.display = "none";
    document.querySelector(".pag2").style.display = "block";
}
