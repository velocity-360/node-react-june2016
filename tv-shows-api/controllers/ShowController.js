var Show = require('../models/Show')

module.exports = {

	get: function(params, callback){
		Show.find(params, function(err, shows){
			if (err){
				callback(err, null)
				return
			}

			callback(null, shows)
			return
		})
	},

	getById: function(id, callback){
		Show.findById(id, function(err, show){
			if (err){
				var msg = 'Show '+id+' not found.'
				callback({message:msg}, null)
				return
			}

			callback(null, show)
			return
		})
	},

	post: function(params, callback){
		var castString = params['castString']
		if (castString != null){
			var castArray = []
			var a = castString.split(',')
			for (var i=0; i<a.length; i++){
				var castMember = a[i]
				castArray.push(castMember.trim())
			}

			params['cast'] = castArray
		}

		Show.create(params, function(err, show){
			if (err){
				callback(err, null)
				return
			}

			callback(null, show)
			return
		})
	}




}