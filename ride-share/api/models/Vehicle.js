const { Model } = require("../db");

class Vehicle extends Model{
	static get tableName(){
		return 'vehicle';
	}
}

module.exports = Vehicle;