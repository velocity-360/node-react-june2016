var express = require('express')
var router = express.Router()
var ShowController = require('../controllers/ShowController')
var ActorController = require('../controllers/ActorController')
var controllers = {
	show: ShowController,
	actor: ActorController
}


router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
	    res.json({
	    	confirmation:'fail',
	    	message: 'Invalid Resource'
	    })

	    return
	}

	controller.get(req.query, function(err, results){
		if (err){
		    res.json({
		    	confirmation:'fail',
		    	message: err
		    })

		    return
		}

	    res.json({
	    	confirmation:'success',
	    	results: results
	    })

	    return
	})
})


router.get('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource
	var id = req.params.id
	var controller = controllers[resource]
	if (controller == null){
	    res.json({
	    	confirmation:'fail',
	    	message: 'Invalid Resource'
	    })

	    return
	}

	controller.getById(id, function(err, result){
		if (err){
		    res.json({
		    	confirmation:'fail',
		    	message: err.message
		    })

		    return
		}

	    res.json({
	    	confirmation:'success',
	    	result: result
	    })

	    return
	})
})

router.post('/:resource', function(req, res, next) {
	var resource = req.params.resource
	var controller = controllers[resource]
	if (controller == null){
	    res.json({
	    	confirmation:'fail',
	    	message: 'Invalid Resource'
	    })

	    return
	}

	controller.post(req.body, function(err, result){
		if (err){
		    res.json({
		    	confirmation:'fail',
		    	message: err
		    })

		    return
		}

	    res.json({
	    	confirmation:'success',
	    	result: result
	    })

	    return
	})

})




module.exports = router
