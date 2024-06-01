/**
 * Create a shopping cart that allows the user to add items to the cart and remove items from the cart. An item is a javascript object with the following properties:
 * - name: the name of the item
 * - price: the price of the item
 *
 * The shopping cart should be able to store up to 10 items.
 * The shopping cart should be able to display the total price of the items in the cart.
 * The shopping cart should be able to display the total number of items in the cart.
 *
 * Example:
 * - add item "apple" to cart
 * - remove item "apple" from cart
 * - display total price of items in cart
 * - display total number of items in cart
 *
 * @param {string[]} items
 * @returns {string}
 */
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        if (this.items.length < 10) {
            this.items.push(item);
            console.log(`${item.name} added to the cart.`);
        } else {
            console.log("Cart is full. Cannot add more items.");
        }
    }

    removeItem(itemName) {
        const index = this.items.findIndex(item => item.name === itemName);
        if (index !== -1) {
            const removedItem = this.items.splice(index, 1)[0];
            console.log(`${removedItem.name} removed from the cart.`);
        } else {
            console.log(`${itemName} is not in the cart.`);
        }
    }

    displayTotalPrice() {
        const totalPrice = this.items.reduce((total, item) => total + item.price, 0);
        console.log(`Total price of items in the cart: $${totalPrice.toFixed(2)}`);
    }

    displayTotalItems() {
        console.log(`Total number of items in the cart: ${this.items.length}`);
    }
}


const cart = new ShoppingCart();
cart.addItem({ name: "apple", price: 0.5 });
cart.addItem({ name: "banana", price: 0.3 });
cart.addItem({ name: "orange", price: 0.8 });

cart.displayTotalItems(); 
cart.displayTotalPrice(); 

cart.removeItem("apple");
cart.displayTotalItems();
cart.displayTotalPrice(); 
