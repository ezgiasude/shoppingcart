// const card = document.getElementsByClassName("card");
// const btnAdd = document.getElementsByClassName("btn-info");
const btnCart = document.querySelector(".btn-cart");
const cartList = document.querySelector(".shopping-cart-list");
const productList = document.getElementById("productList");

var products = [];


function addToCartList(product) {
  const listItem = document.createElement("div");
  listItem.classList = "list-item";

  listItem.innerHTML =
    `
        <div class="row align-items-center text-white-50">
            <div class="col-md-3">
                <img src="${product.imageUrl}" alt="product" class="img-fluid">
            </div>
            <div class="col-md-5">
                <div class="title">${product.name}</div>
            </div>
            <div class="col-md-2">
                <div class="price">${product.price}</div>
            </div>
            <div class="col-md-2">
                <button onclick="removeCart('${product.id}')" id="${product.id}" class="btn btn-delete">
                    <i class="fas fa-trash-alt text-danger"></i>
                </button>
            </div>
        </div>
        `
  cartList.appendChild(listItem);
  cartCount();
}

function removeCart(id) {
  $.ajax({
    type: 'DELETE',
    url: 'http://localhost:3000/api/cart/' + id,
    data: '',
    success: function (data) {
      let btnRemove = document.getElementById(id);
      btnRemove.parentElement.parentElement.parentElement.remove();
      cartCount();
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

function cartCount() {
  let cartListItem = cartList.getElementsByClassName("list-item");
  let itemCount = document.getElementById("item-count");
  itemCount.innerHTML = cartListItem.length;
}

function cartToggle() {
  btnCart.addEventListener("click", function () {
    cartList.classList.toggle("d-none");
  })
}


function addToCart(id, name, price, imageUrl) {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  var cart = {
    "productId": id,
    "quantity": 1,
    "price": price,
    "customerId": user._id
  };

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/cart',
    data: JSON.stringify(cart),
    success: function (data) {
      addToCartList({ id: data._id, name: name, price: price, imageUrl: imageUrl });
    },
    contentType: "application/json",
    dataType: 'json'
  });
}

function loadProducts() {
  $.get("http://localhost:3000/api/product", function (data) {

    products = data;

    const listItem = document.createElement("div");
    listItem.classList = "row";

    data.forEach(element => {
      listItem.innerHTML +=
        `
                <div class="col-lg-3 col-md-6 mb-3">
                <div class="card">
                  <img src="${element.imageUrl}" alt="product" class="card-img-top img-fluid">
                  <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="cart-text">
                    <input type="hidden" id="custId" name="custId" value="3487">
                    ${element.description}
                    </p>
                    <div class="d-flex justify-content-between">
                      <a class="btn btn-info text-white" onclick="addToCart('${element._id}','${element.name}','${element.price}','${element.imageUrl}')" href="#">Add to Cart</a>
                      <span class="price badge rounded-pill bg-warning text-dark d-flex align-items-center">$
                      ${element.price}</span>
                    </div>
                  </div>
                </div>
                </div>
                `
    });
    productList.appendChild(listItem);

    loadCartItems();
  });
}

function loadCartItems() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  if (user != undefined && products != undefined) {
    $.get("http://localhost:3000/api/cart/" + user._id, function (data) {

      data.forEach(element => {
        var product = products.find(x => x._id == element.productId);
        if (product != undefined) {
          addToCartList({ id: element._id, name: product.name, price: product.price, imageUrl: product.imageUrl });
        }
      });

    });
  }
}


$(document).ready(function () {

  cartToggle();
  loadProducts();
});


