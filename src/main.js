//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/

let btnEnter = document.querySelector("#btn-enter");
btnEnter.addEventListener("click", nextPage);

function nextPage() {
    document.querySelector(".pag1").style.display = "none";
    document.querySelector(".pag2").style.display = "block";
}

//guardar la data en una variable
let allData = data.results;
//funcion para crear las tarjetas de los personales
function showCharacter(data) {
    let character = "";
    for (let i = 0; i < data.length; i++) {
        character += `<div class="info-card">
        <div class="info-card-inner">
          <div class="card" id="card">
            <img src="${data[i].image} class="cardImage">
            <p class="characterName">${data[i].name}</p>
          </div>
          <div class="info-back-card">
            <img src="/imagenes/logo2.png class=" back-card-logo">
            <p class="characterInfo"> Estado de vida:${data[i].status}</p>
            <p class="characterInfo"> Especie:${data[i].species}</p>
            <p class="characterInfo"> Genero:${data[i].gender}</p>
            <p class="characterInfo"> Origen:${data[i].origin}</p>
            <p class="characterInfo"> Locacion:${data[i].location}</p>
          </div>
        </div>
      </div>`
      }
      return character;
    }
    
document.getElementById("characterList").innerHTML = showCharacter(allData);