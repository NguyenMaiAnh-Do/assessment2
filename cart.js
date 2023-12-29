///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const carts = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = carts.reduce((total, cart) => total + cart.price)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax){
    cartTotal = cartTotal*(1+tax) - couponValue
    return cartTotal

}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
CustomerID:
Data Type: Integer
Explanation: This property will store a unique identifier for each customer. Using an integer data type is appropriate for an identifier as it allows for easy sorting and indexing.

Name:
Data Type: String
Explanation: The customer's name is essential for personalization and communication. Storing it as a string allows for flexibility in handling various name formats.

Email:
Data Type: String
Explanation: Storing the customer's email address is crucial for communication, order confirmation, and marketing purposes. Using a string data type allows for storing email addresses of varying lengths.

OrderHistory:
Data Type: List or Array of Order Objects
Explanation: To keep track of a customer's order history, a list or array of order objects would be appropriate. Each order object within the list could contain details such as order number, items ordered, date, and total cost. This allows for easy retrieval and analysis of a customer's past orders.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class Customer {
    constructor(customerID, name, email, orderHistory = []) {
      this.customerID = customerID;
      this.name = name;
      this.email = email;
      this.orderHistory = orderHistory;
    }
  
    // Method to add a new order to the order history
    addOrder(order) {
      this.orderHistory.push(order);
    }
  
    // Method to retrieve the customer's order history
    getOrderHistory() {
      return this.orderHistory;
    }
  }
  
  // Example customer object
  const exampleCustomer = new Customer(1, "John Doe", "john@example.com");
  
  // Example order object
  const exampleOrder = {
    orderNumber: 12345,
    items: ["Burger", "Fries", "Drink"],
    date: new Date(),
    totalCost: 25.99,
  };
  
  // Adding the example order to the customer's order history
  exampleCustomer.addOrder(exampleOrder);
  
  // Retrieving and logging the customer's order history
  const customerOrderHistory = exampleCustomer.getOrderHistory();
  console.log(customerOrderHistory);
  