// Example 1A using node js

function placeOrder(ex_time, order_id){
	console.log(`receive order`+ order_id);
	setTimeout(()=>{
		console.log("delivery order"+ order_id);
	},ex_time);
}
placeOrder(5000, 1);
placeOrder(4000, 2);
placeOrder(1000, 3);
placeOrder(2000, 4);

