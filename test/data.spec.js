import { filterContainer, sortData } from "../src/data.js";
//import data from "../src/data/rickandmorty/rickandmorty.js";

//const allData = data.results;

const charactersData = [
  {
    //id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
  {
    //id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
  },
  {
    //id: 17,
    name: "Annie",
    status: "Alive",
    species: "Human",
  },
  {
    //id: 27,
    name: "Artist Morty",
    status: "Alive",
    species: "Human",
  },
];
const orderAZ = [
  {
    //id: 17,
    name: "Annie",
    status: "Alive",
    species: "Human",
  },
  {
    //id: 27,
    name: "Artist Morty",
    status: "Alive",
    species: "Human",
  },
  {
    //id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
  },
  {
    //id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
];
const orderZA = [
  {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
  {
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
  },
  {
    name: "Artist Morty",
    status: "Alive",
    species: "Human",
  },
  {
    name: "Annie",
    status: "Alive",
    species: "Human",
  },
];
const aNames = [
  { name: "Annie", status: "Alive", species: "Human" },
  { name: "Artist Morty", status: "Alive", species: "Human" },
];

describe("filters", () => {
  it("is a function", () => {
    expect(typeof filterContainer.speciesFilter).toBe("function");
  });
  it("species filter return Human", () => {
    expect(filterContainer.speciesFilter(charactersData, "Human")).toEqual(
      charactersData
    );
  });
  it("status filter return Alive", () => {
    expect(filterContainer.statusFilter(charactersData, "Alive")).toEqual(
      charactersData
    );
  });
});
describe("filters", () => {
  it("is a function", () => {
    expect(typeof filterContainer.searchFilter).toBe("function");
  });
  it("search filter return A", () => {
    expect(filterContainer.searchFilter(aNames, "A")).toEqual(aNames);
  });
  /*it("search filter return A", () => {
    expect(
      filterContainer.searchFilter("Rick Sanchez", charactersData)
    ).toEqual([
      {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
      },
    ]);
  });*/
});
describe("alphabeticalOrder", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });
});

it("returns ascendant order", () => {
  expect(sortData(charactersData)).toEqual(orderAZ);
});

it("returns descendant order", () => {
  expect(sortData(charactersData, "orderDesc")).toEqual(orderZA);
});
