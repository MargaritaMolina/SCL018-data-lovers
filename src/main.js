//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";
import { filterContainer, sortData } from "./data.js";

//onsole.log(sortData);

let btnEnter = document.querySelector("#btn-enter");
btnEnter.addEventListener("click", nextPage);

function nextPage() {
  document.querySelector(".pag1").style.display = "none";
  document.querySelector(".pag2").style.display = "block";
}

let btnBack = document.querySelector("#btnBack");
btnBack.addEventListener("click", backPage);

function backPage() {
  document.querySelector(".pag1").style.display = "block";
  document.querySelector(".pag2").style.display = "none";
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
          <div class="image">
            <img src="${data[i].image}" class="cardImage"/>
          </div>
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
    <div class="all-Caracters">
      <select name ="" id="selCharacters" class="selectFilter">
      <option value="allCharacters"  selected>Characters </option>
      ´;
      nav += ´<option id="orderAs" value="orderAsc">A-Z</option>´;
      nav += ´<option id="orderDes" value="orderDesc">Z-A</option>´;
    
  nav += ´</select>
     </div>

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
    <select name="" id="selOrigin" class="selectFilter">
    <option value="Origin" selected>Origin</option>
    `;

  uniqueOrigin.forEach((e) => {
    nav += `<option value="${e}">${e}</option>`;
  });

  nav += `</select>
  </div>
  <div class="filter-Status">
    <select name="" id="selStatus" class="selectFilter">
    <option value="status" selected>Status</option>`;

  uniqueStatus.forEach((e) => {
    nav += `<option value="${e}">${e}</option>`;
  });

  nav += `</select>
    </div>

  <div class="filter-Gender">
    <select name="" id="selGender" class="selectFilter">
    <option value="Genero" selected>Gender</option>
    `;

  uniqueGender.forEach((e) => {
    nav += `<option value="${e}">${e}</option>`;
  });

  nav += `</select>
  </div>
  <div class="filter-Location">
    <select name="" id="selLocation" class="selectFilter">
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

//Ordenando los personajes

// This is where filtering happens!

let selOrder = document.getElementById("selCharacters");
selOrder.addEventListener("change", () => {
  const selByOrder = sortData(allData, selOrder.value);
  //console.log(selOrder.value);
  const show = (data) => {
    div.innerHTML = "";
    div.innerHTML += showCharacter(data);
  };
  show(selByOrder);
});

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

const selOrigin = document.querySelector("#selOrigin");

selOrigin.addEventListener("change", function (e) {
  const originOptions = e.target.options;
  const selectedOrigin = originOptions[originOptions.selectedIndex].text;
  div.innerHTML = "";
  let origin1 = selectedOrigin;
  let onlyOrigin1 = filterContainer.originFilter(allData, origin1);
  document.getElementById("characterList").innerHTML +=
    showCharacter(onlyOrigin1);
});

const selStatus = document.querySelector("#selStatus");

selStatus.addEventListener("change", function (e) {
  const statusOptions = e.target.options;
  const selectedStatus = statusOptions[statusOptions.selectedIndex].text;
  div.innerHTML = "";
  let statu = selectedStatus;
  let onlyStatu = filterContainer.statusFilter(allData, statu);
  document.getElementById("characterList").innerHTML +=
    showCharacter(onlyStatu);
});

const selGender = document.querySelector("#selGender");

selGender.addEventListener("change", function (e) {
  const genderOptions = e.target.options;
  const selectedGender = genderOptions[genderOptions.selectedIndex].text;
  div.innerHTML = "";
  let gende = selectedGender;
  let onlyGende = filterContainer.genderFilter(allData, gende);
  document.getElementById("characterList").innerHTML +=
    showCharacter(onlyGende);
});

const selLocation = document.querySelector("#selLocation");

selLocation.addEventListener("change", function (e) {
  const locationOptions = e.target.options;
  const selectedLocation = locationOptions[locationOptions.selectedIndex].text;
  div.innerHTML = "";
  let locatio = selectedLocation;
  let onlyLocatio = filterContainer.locationFilter(allData, locatio);
  document.getElementById("characterList").innerHTML +=
    showCharacter(onlyLocatio);
});

const searchInput = document.querySelector("#searchInput");

searchInput.addEventListener("keyup", (e) => {
  const inputSearch = e.target.value;
  div.innerHTML = "";
  let onlySearch = filterContainer.searchFilter(allData, inputSearch);
  document.getElementById("characterList").innerHTML +=
    showCharacter(onlySearch);
});
