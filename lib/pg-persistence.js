const { dbQuery } = require("./dbQuery");

module.exports = class PgPersistence {
  async loadAllPeople() {
    const LOAD_PEOPLE = "SELECT * FROM people ORDER BY name ASC";
    let loadPeopleQuery = await dbQuery(LOAD_PEOPLE);
    let allPeople = loadPeopleQuery.rows;
    return allPeople;
  }

  /*
  async addPerson(name) {
    const ADD_PERSON = "INSERT INTO people (name) VALUES ($1)";
    let addPersonQuery = await dbQuery(ADD_PERSON);
    return addPersonQuery.rows > 0;
  }
  */
};
