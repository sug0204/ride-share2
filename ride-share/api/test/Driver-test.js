const Driver = require("../models/Driver");
async function testDriver() {
await Driver.query()
    .select()
    .then((driver) => console.log(driver))
    .catch((error) => console.log(error.message));
    Driver.knex().destroy();
}

testDriver();
