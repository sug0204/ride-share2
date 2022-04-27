const { Model } = require("../db");

class User extends Model{
	static get tableName(){
		return 'user';
	}
}

module.exports = User;