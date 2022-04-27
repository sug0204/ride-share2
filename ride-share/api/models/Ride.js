const { Model } = require("../db");

class Ride extends Model{
	static get tableName(){
		return 'ride';
	}
}

module.exports = Ride;