const { Model } = require("../db");

class State extends Model{
	static get tableName(){
		return 'state';
	}
}

module.exports = State;