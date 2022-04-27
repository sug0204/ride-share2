const User = require("../models/User");
async function testUser() {
await User.query()
    .select()
    .then((user) => console.log(user))
    .catch((error) => console.log(error.message));
    User.knex().destroy();
}

testUser();
