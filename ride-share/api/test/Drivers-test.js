const Drivers = require("../models/Drivers");
async function testDrivers() {
await Drivers.query()
    .select()
    .then((drivers) => console.log(drivers))
    .catch((error) => console.log(error.message));
    Drivers.knex().destroy();
}

testDrivers();
