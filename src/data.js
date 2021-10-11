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
    console.log(onlyOrigin);
    return onlyOrigin;
  },
  statusFilter(allData, status) {
    let onlyStatus = allData.filter((character) => {
      return character.status === status;
    });
    //console.log(onlyStatus);
    return onlyStatus;
  },
};

export default filterContainer;
