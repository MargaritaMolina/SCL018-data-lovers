// estas funciones son de ejemplo

const filterContainer = {
  speciesFilter(allData, species) {
    let onlySpecies = allData.filter((character) => {
      return character.species === species;
    });
    console.log(onlySpecies);
    return onlySpecies;
  },
};

export default filterContainer;
