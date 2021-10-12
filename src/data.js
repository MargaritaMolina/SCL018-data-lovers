// estas funciones son de ejemplo

const filterContainer = {
  speciesFilter(allData, species) {
    let onlySpecies = allData.filter((character) => {
      return character.species === species;
    });
    //console.log(onlySpecies);
    return onlySpecies;
  },
  originFilter(allData, origin) {
    let onlyOrigin = allData.filter((character) => {
      return character.origin.name === origin; //se debe agregar el .name para poder acceder a los datos
    });
    //console.log(onlyOrigin);
    return onlyOrigin;
  },
  statusFilter(allData, status) {
    let onlyStatus = allData.filter((character) => {
      return character.status === status;
    });
    //console.log(onlyStatus);
    return onlyStatus;
  },
  genderFilter(allData, gender) {
    let onlyGender = allData.filter((character) => {
      return character.gender === gender;
    });
    return onlyGender;
  },
  locationFilter(allData, location) {
    let onlyLocation = allData.filter((character) => {
      return character.location.name === location;
    });
    return onlyLocation;
  },

  searchFilter(allData, searchValue) {
    let onlySearch = allData.filter((characters) =>
      characters.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return onlySearch;
  },
};

export default filterContainer;
