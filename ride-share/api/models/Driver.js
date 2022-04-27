const { Model } = require("../db");

class Driver extends Model{
	static get tableName(){
		return 'driver';
	}
}

module.exports = Driver;