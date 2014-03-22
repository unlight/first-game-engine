EngineObject = function() {

EngineObject.__isPrototypeDefined = EngineObject.__isPrototypeDefined || !!function() {

	EngineObject.prototype.getHumanReadableName = function() {
		throw "Not implemented.";
	}

}(); // end of __isPrototypeDefined

} // end of EngineObject()

module.exports = EngineObject;