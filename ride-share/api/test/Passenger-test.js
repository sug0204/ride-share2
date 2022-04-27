const Passenger = require("../models/Passenger");
async function testPassenger() {
await Passenger.query()
    .select()
    .then((passenger) => console.log(passenger))
    .catch((error) => console.log(error.message));
    Passenger.knex().destroy();
}

testPassenger();
