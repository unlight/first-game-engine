// var Vector = require("./vector.js");
// var EngineObject = require("./object.js");

Actor.prototype = Object.create(EngineObject.prototype);
Actor.prototype.constructor = Actor;

function Actor() {

var _location = new Vector(0, 0);
var _lifeTime;
var _useCylinderCollision;
var _collisionRadius;
var _velocity = new Vector(0, 0);

Actor.__isPrototypeDefined = Actor.__isPrototypeDefined || !!new function() {

Actor.prototype.render = function(c) {
	c.moveTo(0, 0);
	c.beginPath();
	c.arc(this.location.x, this.location.y, this.collisionRadius, 0, 2 * Math.PI);
	c.stroke();
	c.closePath();
}

Actor.prototype.tick = function(deltaTime) {
	this.location.x += this.velocity.x * deltaTime;
	this.location.y += this.velocity.y * deltaTime;
}

Actor.prototype.hitWall = function(normal, wall) {

}

Object.defineProperty(Actor.prototype, "location", {
	get: function() {
		return _location;
	},
	set: function(value) {
		if (value instanceof Vector) {
			_location = value;
		}
	}
});

Object.defineProperty(Actor.prototype, "velocity", {
	get: function() {
		return _velocity;
	},
	set: function(value) {
		if (value instanceof Vector) {
			_velocity = value;
		}
	}
});

Object.defineProperty(Actor.prototype, "useCylinderCollision", {
	get: function() {
		return _useCylinderCollision;
	},
	set: function(value) {
		_useCylinderCollision = value;
	}
});

Object.defineProperty(Actor.prototype, "collisionRadius", {
	get: function() {
		return _collisionRadius;
	},
	set: function(value) {
		if (value >= 0) {
			_collisionRadius = value;	
		}
	}
});

} // end of __isPrototypeDefined

} // end of Actor()


module.exports = Actor;