// Structures.

function Vector(x, y) {
	this.x = x;
	this.y = y;
}

Vector.normal = function(v) {
	var result = new Vector(v.x, v.y);
	var size = Math.hypot(v.x, v.y);
	result.x = result.x / size;
	result.y = result.y / size;
	return result;
}

Vector.inverse = function(v) {
	var r = new Vector(v.x, v.y);
	r.x = -1 * r.x;
	r.y = -1 * r.y;
	return r;
}

module.exports = Vector;

// Polyfill

if (!Math.hypot) {

	Math.hypot = function () {
	      var values = [];
	      var m = 0, sawNaN = false;
	      for (var i = 0; i < arguments.length; ++i) {
	        var n = Math.abs(Number(arguments[i]));
	        if (n === Infinity) return n;
	        if (n !== n) sawNaN = true;
	        if (n > m) m = n;
	        values[i] = n;
	      }
	      if (sawNaN) return NaN;
	      if (m === 0) return +0;
	      var sum = +0;
	      for (i = 0; i < values.length; ++i) {
	        var r = values[i] / m;
	        sum = sum + r * r;
	      }
	      return m * sqrt(sum);
	}

}