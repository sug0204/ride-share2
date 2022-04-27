const Vehicle = require("../models/Vehicle");
async function testVehicle() {
await Vehicle.query()
    .select()
    .then((vehicle) => console.log(vehicle))
    .catch((error) => console.log(error.message));
    Vehicle.knex().destroy();
}

testVehicle();
