var mongoose = require('mongoose')

var ActorSchema = new mongoose.Schema({
	name: {type:String, default:''},
	gender: {type:String, default:''},
	age: {type:Number, default:0},
	timestamp: {type:Date, default:Date.now}
})

module.exports = mongoose.model('ActorSchema', ActorSchema)