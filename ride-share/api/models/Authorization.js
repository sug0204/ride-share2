const { Model } = require("../db");

class Authorization extends Model{
	static get tableName(){
		return 'authorization';
	}
}

module.exports = Authorization;