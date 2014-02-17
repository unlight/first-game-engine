function Actor() {

}

Actor.prototype = Object.create(xObject.prototype);
Actor.prototype.constructor = Actor;

Actor.prototype.render = function(canvas) {
	throw "Not implemented.";
}

var defineProperty = function() {

}

Object.defineProperty(Actor.prototype, "location", {
	get: function() {
		return this._location;
	},
	set: function(value) {
		if (value instanceof Vector) {
			this._location = value;
		}
	}
});

Actor.prototype.lifeTime = 0;


Actor.prototype.tick = function(deltaTime) {
	throw "Not implemented.";
}