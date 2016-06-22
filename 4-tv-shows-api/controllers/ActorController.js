var Actor = require('../models/Actor')

module.exports = {

	get: function(params, callback){
		Actor.find(params, function(err, actors){
			if (err){
				callback(err, null)
				return
			}

			callback(null, actors)
			return
		})
	},

	getById: function(id, callback){
		Actor.findById(id, function(err, actor){
			if (err){
				var msg = 'Actor '+id+' not found.'
				callback({message:msg}, null)
				return
			}

			callback(null, actor)
			return
		})
	},

	post: function(params, callback){
		Actor.create(params, function(err, actor){
			if (err){
				callback(err, null)
				return
			}

			callback(null, actor)
			return
		})
	}




}