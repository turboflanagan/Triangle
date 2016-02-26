var Triangle = function(a,b,c) {
	var a = a;
	var b = b;
	var c = c;
};

Triangle.prototype.kind = function(a,b,c) {
	console.log(a,b,c);
	if(a === b && b === c)
		return "equilateral";
	if(b === c)
		return "isosceles";
	
};

// module.exports = Triangle;