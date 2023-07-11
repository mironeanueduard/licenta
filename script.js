var item = document.getElementById("product-container");
var total = document.getElementById("totalPrice");
var x = document.getElementById("x");
var cart = document.getElementById("cart");
var suma = 0;

function addProduct(button) {
  alert("Product added!");

  let productPrice = parseFloat(button.getAttribute("data-price")); // converteste din string in number
  let productName = button.getAttribute("data-name"); // aici avem butonul selectat si dupa avem proprietatea data name( iau valoarea din HMTL de la data-name)
  suma = suma + productPrice;
  let div = document.createElement("div"); // aici creeam divul in javascript, noi trebuie sa creem un div mereu cand apasam pe buton iar in interiorul acestui div, 2 p-uri, unul cu name si unul cu price.
  div.className = "product-item"; // adaugam clasa de css cu numele product name,product price
  let p = document.createElement("p");
  p.className = "product-name";
  p.appendChild(document.createTextNode(productName)); // eu am creat un p, dar ce pun in interiorul lui? punem product name
  div.appendChild(p); // am creat un div, si ce punem in interior? ce appenduim? p-ul
  let p2 = document.createElement("p");

  p2.className = "product-price";
  p2.appendChild(document.createTextNode(productPrice)); // eu am creat un p, dar ce pun in interiorul lui? punem product price.
  div.appendChild(p2); // am creat un div, si ce punem in interior? ce appenduim? p-2ul
  item.appendChild(div); //dupa divul il punem in item (in itemul declarat mai sus)     Divului din HTML, ii adaugam appenchild    (divul nostru care l am creat),
  total.innerText = "TOTAL PRICE : " + suma.toFixed(2) + " RON";
}

function hideCart() {
  cart.style.display = "none";
}

function showCart() {
  cart.style.display = "block";
}
function buyNow() {
  if (suma != 0) {
    localStorage.setItem("suma", suma.toFixed(2));
    cart.style.display = "none";
    alert("Thank you for the order");
  }
}

event.preventDefault(); //by default cand apesi un buton se face refresh la pagina, asa nu se mai face
