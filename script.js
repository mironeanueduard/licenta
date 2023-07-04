var item = document.getElementById("product-container");
var total = document.getElementById("totalPrice");
var x = document.getElementById("x");
var cart = document.getElementById("cart");
var suma = 0;

function addProduct(button) {
  alert("Product added!");
  let productPrice = parseFloat(button.getAttribute("data-price"));
  let productName = button.getAttribute("data-name");
  suma = suma + productPrice;

  let div = document.createElement("div");
  div.className = "product-item";
  //create p tag <p></p>
  let p = document.createElement("p");
  //i-am adaugat clasa
  p.className = "product-name";
  //i-am spus ce valoarea sa ia
  p.appendChild(document.createTextNode(productName));
  //=> similar cu => <p>productName</p>

  //adaugam p-ul creat in div-ul creat
  div.appendChild(p);

  let p2 = document.createElement("p");
  p2.className = "product-price";
  p2.appendChild(document.createTextNode(productPrice));

  div.appendChild(p2);

  item.appendChild(div);

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
    alert("COMANDA A FOST TRIMISA!");
  }
}
