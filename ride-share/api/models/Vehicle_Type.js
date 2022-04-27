const { Model } = require("../db");

class Vehicle_Type extends Model{
	static get tableName(){
		return 'vehicle_Type';
	}
}

module.exports = Vehicle_Type;