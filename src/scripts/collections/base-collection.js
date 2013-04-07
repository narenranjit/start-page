var BaseModel = require('models/base-model');

module.exports = function(){
	return Backbone.Collection.extend({
		model: BaseModel,
		initialize: function(){

		}
	});
}();