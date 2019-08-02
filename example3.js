//Example 3

function placeOrder(ex_time, order_id, show, callback){
	console.log(`receive order`+ order_id);

			setTimeout(()=>{
				show(order_id);
				callback();
			},ex_time);
}

function show(order_id){
	console.log("delivery order"+ order_id);
}

placeOrder(5000, 1 , show, ()=>{
	placeOrder(4000, 2 , show, ()=>{
		placeOrder(1000, 3 , show, ()=>{
			placeOrder(2000, 4 , show, ()=>{
			});
		});
		
	});
});