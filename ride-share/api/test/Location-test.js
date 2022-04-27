const Location = require("../models/Location");
async function testLocation() {
await Location.query()
    .select()
    .then((location) => console.log(location))
    .catch((error) => console.log(error.message));
    Location.knex().destroy();
}

testLocation();
