function GameEngine() {

	var _lastTickTime;
	var _canvas;
	var _actors = [];
	var canvasElement;

	// https://github.com/jlongster/canvas-game-bootstrap/blob/a878158f39a91b19725f726675c752683c9e1c08/js/app.js#L22
	var requestAnimFrame = (function(){
	    return function(callback) {
			setTimeout(callback, 10);
        };
	})();

	GameEngine.spawn = function(actor) {
		_actors.push(actor);
	}

	GameEngine.begin = function() {
		_canvas = GameEngine.createCanvas();
		_lastTickTime = Date.now();
		requestAnimFrame(GameEngine.tick);
	}

	GameEngine.createCanvas = function() {
		canvasElement = document.createElement("canvas");
		canvasElement.id = "canvas";
		var context = canvasElement.getContext("2d");
		canvasElement.width = 600;
		canvasElement.height = 400;
		document.body.appendChild(canvasElement);

		return context;
	}

	GameEngine.tick = function() {
	    var now = Date.now();
	    var deltaTime = (now - _lastTickTime) / 1000.0;

	    // console.log("deltaTime", deltaTime);

	    update(deltaTime);
	    render(_canvas);
	    collision();

	    _lastTickTime = now;
	    requestAnimFrame(GameEngine.tick);
	}

	function update(deltaTime) {
		for (var i = 0, count = _actors.length; i < count; i++) {
			_actors[i].tick(deltaTime);
		}
	}
    
	function render() {
		var c = _canvas;
		var w = canvasElement.width / 2;
		var h = canvasElement.height / 2;
		for (var i = 0, count = _actors.length; i < count; i++) {
			var actor = _actors[i];
			// console.log(canvasElement.width, canvasElement.height);
			// console.log(w, h);
			// console.log(actor.collisionRadius);
			c.setTransform(1, 0, 0, 1, 0, 0);
			c.clearRect(0, 0, canvasElement.width, canvasElement.height);
			c.translate(w, h);
			actor.render(c);
		}
		// c.fillStyle = "rgb(200,0,0)";
  		// c.fillRect (0, 0, 55, 50);
	}

	function collision() {
		var w = canvasElement.width / 2;
		var h = canvasElement.height / 2;
		for (var i = 0, count = _actors.length; i < count; i++) {
			var actor = _actors[i];
			if (Math.abs(actor.location.x) + actor.collisionRadius >= w 
				|| Math.abs(actor.location.y) + actor.collisionRadius >= h) {
				var hitNormal = Vector.normal(actor.velocity);
				
				// Bounce
				actor.velocity = Vector.inverse(actor.velocity);

				// console.log(hitNormal);
				actor.hitWall();
				// throw "X";
			}
		}
	}
}