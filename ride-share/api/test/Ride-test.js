const Ride = require("../models/Ride");
async function testRide() {
await Ride.query()
    .select()
    .then((Ride) => console.log(Ride))
    .catch((error) => console.log(error.message));
    Ride.knex().destroy();
}

testRide();
