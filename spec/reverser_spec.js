var vows                = require('vows'),
    assert              = require('assert'),
    reverser         	= require('../reverser')

vows.describe('reverser').addBatch({

    'poopdog': {
    	topic: function() {
    		return reverser('poopdog')
    	},

    	'should return godpoop': function(error, result) {
    		assert.equal(result, 'godpoop')
    	}

    }


}).export(module); 
