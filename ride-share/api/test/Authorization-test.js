const Authorization = require("../models/Authorization");
async function testAuthorization() {
await Authorization.query()
    .select()
    .then((authorization) => console.log(authorization))
    .catch((error) => console.log(error.message));
    Authorization.knex().destroy();
}

testAuthorization();
