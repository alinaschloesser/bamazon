# bamazon
node and mysql


Welcome to the bamazon store. We have 10 products for you to choose from. 

Before you begin please install all required packages. 

When you run the bamazon store you will be prompted to give the product id of the item you are looking for (refer to image "items-in-store" for a complete list of items). Once you have selected your item simply enter the item_id in the prompt to move on. The next prompt will ask you to enter the quatity you desire. If the store has an insufficient quantity, you will be notified and prompted for a new quantity. Finally you will be presented with the total for your purchase. 

 
step-by-step:

1. npm install
2. run program [node bamazonCustomer.js]
3. select item_id [integer 1-10]  ...  (image/ item-id-prompt)
4. select quantity [integer] ... (image/ quantity)
enough stock:
5. stock decreases and total is printed ... (image/ order-complete)
not enough stock:
5a. current quantity is printed and new quantity is requested from user ... (image/ new-quantity)
back to 4.

