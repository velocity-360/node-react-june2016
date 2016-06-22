var superagent = require('superagent')

module.exports = {

	get: function(endpoint, params, callback){
		superagent
		.get(endpoint)
		.query(params)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (err){ 
				if (callback != null)
					callback(err, null)
				return
			}

			if (callback != null){
				if (res.body.confirmation == 'success'){
		    		callback(null, res.body)
				}
				else {
		    		callback({message:res.body.message}, null)
				}
			}
		})
	},

	post: function(endpoint, params, callback){
		superagent
		.post(endpoint)
		.send(params)
		.set('Accept', 'application/json')
		.end(function(err, res){
			if (err){ 
				if (callback != null)
					callback(err, null)
				return
			}

			if (callback != null){
				if (res.body.confirmation == 'success'){
		    		callback(null, res.body)
				}
				else {
		    		callback({message:res.body.message}, null)
				}
			}
		})
	}

}