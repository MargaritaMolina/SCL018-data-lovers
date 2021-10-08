//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";
import filterContainer from "./data.js";

//console.log(example, data);

let btnEnter = document.querySelector("#btn-enter");
btnEnter.addEventListener("click", nextPage);

function nextPage() {
  document.querySelector(".pag1").style.display = "none";
  document.querySelector(".pag2").style.display = "block";
}

//guardar la data en una variable
let allData = data.results;
let div = document.getElementById("characterList");
//funcion para crear las tarjetas de los personales

function showCharacter(data) {
  let characters = "";
  for (let i = 0; i < data.length; i++) {
    characters += `<div class="info-card">
        <div class="info-card-inner">
          <div class="card" id="card">
            <img src="${data[i].image}" class="cardImage"/>
          
          <div class="characterName">
            <h3 id="charName">${data[i].name}</h3>
          </div>
          </div>
          <div class="info-back-card">
            <img src="/imagenes/RickandMorty.png" class=" back-card-logo">
            <p class="characterInfo"> Estado de vida: ${data[i].status}</p>
            <p class="characterInfo"> Especie: ${data[i].species}</p>
            <p class="characterInfo"> Genero: ${data[i].gender}</p>
            <p class="characterInfo"> Origen: ${data[i].origin.name}</p>
            <p class="characterInfo"> Locacion: ${data[i].location.name}</p>
          </div>
        </div>
      </div>`;
  }
  return characters;
}

const showNav = () => {
  // Ordenar alfabeticamente

  //Selecting unique values in key species

  let species = [];
  let origin = [];
  let status = [];
  let gender = [];
  let location = [];

  allData.forEach((e) => {
    //forEach() ejecutara la funcion indicada una vez por cada elemento del array, por lo que no dara nombres repetidos
    species.push(e.species); //push añade nuevos elementos al final del array y devuelve uno nuevo, por lo que toma toda la data y devuelve los nombres no repetidos
  });

  allData.forEach((e) => {
    origin.push(e.origin.name);
  });

  allData.forEach((e) => {
    status.push(e.status);
  });

  allData.forEach((e) => {
    gender.push(e.gender);
  });

  allData.forEach((e) => {
    location.push(e.location.name);
  });

  function onlyUnique(value, index, self) {
    //Esta función descarta o elimina valores duplicados.
    return self.indexOf(value) === index; // Self tiene un alcance global. indexOf devuelve el indice, dentro del objeto string que realiza la llamada.
  }
  let uniqueSpecies = species.filter(onlyUnique); //El método filter recorrerá la matriz y dejará solo aquellas entradas que pasen la función onlyUnique.
  // onlyUnique comprueba que

  let uniqueOrigin = origin.filter(onlyUnique);

  let uniqueStatus = status.filter(onlyUnique);

  let uniqueGender = gender.filter(onlyUnique);

  let uniqueLocation = location.filter(onlyUnique);
  //creating navigation with unique values

  let nav = `<nav class="allFilters"> 
    <div class="filter-Species">
      <select name="" id="selSpecies" class="selectFilter">
      <option value="species" selected>Species</option>
      `;

  uniqueSpecies.forEach((e) => {
    nav += `<option value="${e}">${e}</option>`;
    //console.log(e);
  });

  nav += `</select>
    </div>

  <div class="filter-Origin">
    <select name="" id="" class="selectFilter">
    <option value="Origin" selected>Origin</option>
    `;

  uniqueOrigin.forEach((e) => {
    nav += `<option value="${e}">${e}</option>`;
  });

  nav += `</select>
  </div>
  <div class="filter-Status">
    <select name="" id="" class="selectFilter">
    <option value="status" selected>Status</option>`;

  uniqueStatus.forEach((e) => {
    nav += `<option value="${e}">${e}</option>`;
  });

  nav += `</select>
    </div>

  <div class="filter-Gender">
    <select name="" id="" class="selectFilter">
    <option value="Genero" selected>Gender</option>
    `;

  uniqueGender.forEach((e) => {
    nav += `<option value="${e}">${e}</option>`;
  });

  nav += `</select>
  </div>
  <div class="filter-Location">
    <select name="" id="" class="selectFilter">
    <option value="Locacion" selected>Location</option>
    `;

  uniqueLocation.forEach((e) => {
    nav += `<option value="${e}">${e}</option>`;
  });

  nav += `</select>
  </div>

  <div>
          <input
            type="text"
            id="searchInput"
            class="selectFilter"
      
          />
        </div>
  </nav>`;
  return nav;
};

document.getElementById("characterList").innerHTML = showCharacter(allData);
document.getElementById("allFilters").innerHTML += showNav();

// This is where filtering happens!
const selSpecies = document.querySelector("#selSpecies");

selSpecies.addEventListener("change", function (e) {
  const speciesOptions = e.target.options;
  const selectedSpecie = speciesOptions[speciesOptions.selectedIndex].text;
  div.innerHTML = "";
  let specie = selectedSpecie;
  let onlySpecie = filterContainer.speciesFilter(allData, specie);
  document.getElementById("characterList").innerHTML +=
    showCharacter(onlySpecie);
});
