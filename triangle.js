var Triangle = function(a,b,c) {
	var a = a;
	var b = b;
	var c = c;
	console.log(a, b, c);
};

Triangle.prototype.kind = function(a,b,c) {
	if(a === b && b === c){
		return "equilateral";
	}else if(a != b && b === c){
		return "isosceles";
	}
	
};

// module.exports = Triangle;