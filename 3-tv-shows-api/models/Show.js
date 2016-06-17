var mongoose = require('mongoose')

var ShowSchema = new mongoose.Schema({
	name: {type:String, default:''},
	network: {type:String, default:''},
	type: {type:String, default:''}, // comedy, drama, reality
	cast: {type:Array, default:[]},
	timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('ShowSchema', ShowSchema)