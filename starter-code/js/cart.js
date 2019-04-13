/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.cart) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbody = table.childNodes[3];
  tbody.innerHTML = '';
}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbody = table.childNodes[3];

  // TODO: Iterate over the items in the cart
  for (var i = 0; i< cart.items.length; i ++){
    
  // TODO: Create a TR
    var tr = document.createElement('tr');
    var a = document.createElement('a');
    var linkText = document.createTextNode('remove');
    a.appendChild(linkText);
    a.href = '';
    a.id = `${cart.items[i].product}`;
    a.addEventListener('click', removeItemFromCart);
  // TODO: Create a TD for the delete link, quantity,  and the item
    var removeTd = document.createElement('td');
    removeTd.appendChild(a);
    var quantityTd = document.createElement('td');
    quantityTd.innerText=`${cart.items[i].quantity}`;
    var productTd = document.createElement('td');
    productTd.innerText = `${cart.items[i].product}`;
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tr.appendChild(removeTd);
    tr.appendChild(quantityTd);
    tr.appendChild(productTd);
    tbody.appendChild(tr);

}

function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.log(event.target.id + ' event in remove');
  for(var i = 0; i < cart.items.length; i++) {
    if(cart.items[i].product === event.target.id) {
      //var index = cart.items.indexOf(item);
      cart.removeItem(i);

    }
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart(); 
  }
}
// This will initialize the page and draw the cart on screen
renderCart();
