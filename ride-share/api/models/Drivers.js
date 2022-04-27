const { Model } = require("../db");

class Drivers extends Model{
	static get tableName(){
		return 'drivers';
	}
}

module.exports = Drivers;