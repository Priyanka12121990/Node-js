var cal = require('./calModule.js');

const num = process.argv.slice(2,process.argv.length);
//console.log(process.argv.slice(2).length);
num_length = process.argv.slice(2).length;
if(num_length > 2 || num_length < 2) {
	console.log("Two parameter allows");
	return;
}
num[0] = parseInt(num[0]);
num[1] = parseInt(num[1]);
console.log("Addition = " + cal.add(num[0],num[1]));
console.log("Substraction = " + cal.sub(num[0],num[1]));
console.log("Multiplication = " + cal.mul(num[0],num[1]));
console.log("Division = " + cal.div(num[0],num[1]));

