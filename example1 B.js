//Example 1B using promise

function placeOrder(ex_time, order_id){
	
	return new Promise(function (resolve,reject) {
			console.log(`receive order`+ order_id);
			setTimeout(()=>{
				
				resolve(console.log("delivery order"+ order_id));
			},ex_time);
	});
}

placeOrder(5000, 1).then((resolve) =>{
  	placeOrder(4000, 2).then((resolve) =>{
  		placeOrder(1000, 3).then((resolve) =>{
  			placeOrder(2000, 4).then((resolve) =>{
			});
		});
	});
},(error) =>{
  console.log(error)
});