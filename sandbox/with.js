var g = 1;
var app = {};
app.g = 0;
// app.x = 0;

with(app) {

	g = 2;
	x = 3;
	var y = 3;
}

console.log(app);
console.log(g);
console.log(y);