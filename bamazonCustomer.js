var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "guest",
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err){
	if (err) throw err;
	promptUser();
});

var prodQuantity;
var prodName;
var prodPrice;

function promptUser(){
	inquirer
 		.prompt({
 			name: "item_id",
 			type: "input",
 			message: "What is the product ID of the product you are looking for?"
 			})
 		.then(function(answer){
 			console.log(answer.item_id);
 			connection.query ( "SELECT * FROM products WHERE ?", { item_id: answer.item_id }, function(err, res){
 				console.log(
 					"Product name: "+
 					res[0].product_name+ 
 					"|| Department: "+
 					res[0].department_name+
 					"|| Price: "+
 					res[0].price+
 					"|| Stock "+
 					res[0].stock_quantity
 					);
 				prodQuantity = res[0].stock_quantity; 
 				prodName = res[0].product_name;
 				prodPrice = res[0].price;
 				checkStock();
 			});
 		});
}

function checkStock(){
	inquirer
		.prompt({
 			name: "quantity",
 			type: "input",
 			message: "How many would you like?"
 		})
		.then(function(answer){
			console.log(prodQuantity);
			var numQuantity = parseInt(answer.quantity);
			if(numQuantity < prodQuantity){
				prodQuantity -= numQuantity;
				var total = numQuantity * prodPrice;
				console.log(prodQuantity);
				connection.query( "UPDATE products SET ? WHERE ?",
    				[{ stock_quantity: prodQuantity },
      				 { product_name: prodName }],
   				 function(err, res) {
     				 console.log("Your total comes to: $" + total );
    			});
			}else {
				console.log("Insufficient quantity!");
				checkStock();
			}

		})
}










