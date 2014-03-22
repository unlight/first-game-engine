var FGE = require("..");
var Actor = FGE.Actor;
var Vector = FGE.Vector;

var a = new Actor();
var b = new Actor();

a.velocity = new Vector(1, 1);
a.collisionRadius = 20;
	    
var lastTickTime = Date.now();

setInterval(function tick() {
    
    var now = Date.now();
    var deltaTime = (now - lastTickTime) / 1000.0;

	a.tick(deltaTime);
	
	lastTickTime = now;

}, 500);