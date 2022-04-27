const Vehiclet = require("../models/Vehicle_Type");
async function testvehiclet() {
await Vehiclet.query()
    .select()
    .then((vehiclet) => console.log(vehiclet))
    .catch((error) => console.log(error.message));
    Vehiclet.knex().destroy();
}

testvehiclet();
