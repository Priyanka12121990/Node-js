function calculator(number_one,number_two) {
	this.number_one = parseInt(number_one);
	this.number_two = parseInt(number_two);
}

calculator.prototype.add = function() {
	return this.number_one + this.number_one;
} 

calculator.prototype.sub = function() {
	return this.number_one - this.number_one;
} 

calculator.prototype.mul = function() {
	return this.number_one * this.number_one;
} 

calculator.prototype.div = function() {
	return this.number_one / this.number_one;
} 

var cal_obj = new calculator(20, 10);
console.log(cal_obj.add());
console.log(cal_obj.sub());
console.log(cal_obj.mul());
console.log(cal_obj.div());
