/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
var cartNum = [];
var selectElement = document.getElementById('items');
var cartItemCounter = 0;
var selectProduct;
var selectQuantity;
document.getElementById('quantity').min = 0;
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  
  //TODO: Add an <option> tag inside the form's select for each product
  
  for (var i in Product.allProducts) {
    var el = document.createElement('option');
    el.textContent = Product.allProducts[i].name;
    el.value = Product.allProducts[i].name;
    selectElement.appendChild(el);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  console.log(event);
  event.preventDefault();
  // var product = document.getElementById('items').value;
  // var quantity = document.getElementById('quantity').value;
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(product, quantity) {
  selectProduct = selectElement.options[selectElement.selectedIndex].value;
  selectQuantity = document.getElementById('quantity').value;
  cart.addItem(selectProduct,selectQuantity);
  cartItemCounter++;
  console.log(cart);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter(product, quantity) {
  document.getElementById('itemCount').innerText = cartItemCounter;
  // cartNum.push(quantity);
  // console.log('test',cartNum);
  // STOPPING HERE, WORKING ON THIS LATER
  // var clickTotal = data.reduce(function (prev, current) {
  //   return (prev.clicked > current.clicked) ? prev : current;});
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
var cartContentDiv = document.getElementById('cartContents');
var ulEl = document.createElement('ul');
cartContentDiv.appendChild(ulEl);

function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var liEl = document.createElement('li');
  liEl.textContent= `${selectProduct} x ${selectQuantity}`;
  ulEl.appendChild(liEl);

  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
