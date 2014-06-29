var CTOR_NAME = "initialize";
var Class = function(properties){
	function ctor(){
		if(properties.hasOwnProperty(CTOR_NAME)){
			properties[CTOR_NAME].apply(this,arguments);
		}
	}
	for (var key in properties){
		if(!properties.hasOwnProperty(key)){
			continue;
		}
		if(key === CTOR_NAME){
			continue;
		}

		ctor.prototype[key] = properties[key];
	}
	return ctor;
};

module.exports = Class;