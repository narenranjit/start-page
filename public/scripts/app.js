require=(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0](function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({"collections/base-collection":[function(require,module,exports){
module.exports=require('mDDY0c');
},{}],"mDDY0c":[function(require,module,exports){
var BaseModel = require('models/base-model');

module.exports = function(){
	return Backbone.Collection.extend({
		model: BaseModel,
		initialize: function(){

		}
	});
}();
},{"models/base-model":"b1W0gF"}],"views/email-view":[function(require,module,exports){
module.exports=require('qBFCmS');
},{}],"qBFCmS":[function(require,module,exports){
var BaseView = require('views/base-view');

module.exports = function(){
	return BaseView.extend({
		initialize: function(options){

		},
		render: function(){
			return this;
		}
	});
}();


},{"views/base-view":"uAuH91"}],"views/base-view":[function(require,module,exports){
module.exports=require('uAuH91');
},{}],"uAuH91":[function(require,module,exports){
module.exports = function(){
	return Backbone.View.extend({
		initialize: function(options){

		},
		render: function(){
			return this;
		}
	});
}();

},{}],"models/base-model":[function(require,module,exports){
module.exports=require('b1W0gF');
},{}],"b1W0gF":[function(require,module,exports){
module.exports = function(){
	return Backbone.Model.extend({
		defaults:{

		},
		initialize: function(){

		}
	});
}();
},{}],1:[function(require,module,exports){
var emailView = require('views/email-view');
var c = require('./collections/base-collection');

$(function () {
    console.log(emailView, c);
    console.log("whoooa");
});


},{"views/email-view":"qBFCmS","./collections/base-collection":"mDDY0c"}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvbmFyZW5yYW5qaXQvTVByanMvc3RhcnQtcGFnZS9zcmMvc2NyaXB0cy9jb2xsZWN0aW9ucy9iYXNlLWNvbGxlY3Rpb24uanMiLCIvVXNlcnMvbmFyZW5yYW5qaXQvTVByanMvc3RhcnQtcGFnZS9zcmMvc2NyaXB0cy92aWV3cy9tb2R1bGVzL2VtYWlsLXZpZXcuanMiLCIvVXNlcnMvbmFyZW5yYW5qaXQvTVByanMvc3RhcnQtcGFnZS9zcmMvc2NyaXB0cy92aWV3cy9iYXNlLXZpZXcuanMiLCIvVXNlcnMvbmFyZW5yYW5qaXQvTVByanMvc3RhcnQtcGFnZS9zcmMvc2NyaXB0cy9tb2RlbHMvYmFzZS1tb2RlbC5qcyIsIi9Vc2Vycy9uYXJlbnJhbmppdC9NUHJqcy9zdGFydC1wYWdlL3NyYy9zY3JpcHRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEJhc2VNb2RlbCA9IHJlcXVpcmUoJ21vZGVscy9iYXNlLW1vZGVsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcblx0cmV0dXJuIEJhY2tib25lLkNvbGxlY3Rpb24uZXh0ZW5kKHtcblx0XHRtb2RlbDogQmFzZU1vZGVsLFxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XG5cblx0XHR9XG5cdH0pO1xufSgpOyIsInZhciBCYXNlVmlldyA9IHJlcXVpcmUoJ3ZpZXdzL2Jhc2UtdmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBCYXNlVmlldy5leHRlbmQoe1xuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpe1xuXG5cdFx0fSxcblx0XHRyZW5kZXI6IGZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdH0pO1xufSgpO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBCYWNrYm9uZS5WaWV3LmV4dGVuZCh7XG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucyl7XG5cblx0XHR9LFxuXHRcdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0fSk7XG59KCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG5cdHJldHVybiBCYWNrYm9uZS5Nb2RlbC5leHRlbmQoe1xuXHRcdGRlZmF1bHRzOntcblxuXHRcdH0sXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oKXtcblxuXHRcdH1cblx0fSk7XG59KCk7IiwidmFyIGVtYWlsVmlldyA9IHJlcXVpcmUoJ3ZpZXdzL2VtYWlsLXZpZXcnKTtcbnZhciBjID0gcmVxdWlyZSgnLi9jb2xsZWN0aW9ucy9iYXNlLWNvbGxlY3Rpb24nKTtcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coZW1haWxWaWV3LCBjKTtcbiAgICBjb25zb2xlLmxvZyhcIndob29vYVwiKTtcbn0pO1xuXG4iXX0=
;