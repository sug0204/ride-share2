const { Model } = require("../db");

class Passenger extends Model{
	static get tableName(){
		return 'passenger';
	}
}

module.exports = Passenger;