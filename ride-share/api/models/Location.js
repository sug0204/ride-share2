const { Model } = require("../db");

class Location extends Model{
	static get tableName(){
		return 'location';
	}
}

module.exports = Location;