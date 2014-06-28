var CTOR_NAME = 'initialize'
var Class = function(properties) {
	function ctor() {
		if (properties.hasOwnProperty(CTOR_NAME)) {
			properties[CTOR_NAME].apply(this, arguments);
		}
	}
	return ctor;
};

module.exports = Class;