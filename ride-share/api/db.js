
const knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'pg.cse.taylor.edu',
		user: 'hyeonseong_park',
		password: 'cozuzola',
		database: 'hyeonseong_park'
	}
});

const objection = require('objection');
const Model = objection.Model;
Model.knex(knex);

module.exports = { knex, Model };