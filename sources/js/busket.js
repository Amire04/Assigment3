function success() {
  alert("This item is added to basket");
}
let cartArr = JSON.parse(localStorage.getItem(`cart`));
let cartDiv = document.querySelector(`#cartDiv`);
function drawCart() {
  cartDiv.innerHTML = ``;
  for (let item of cartArr) {
    cartDiv.innerHTML += `<div class="col-lg-4 col-md-6 mt-4">
      <div class="card cartCard">
        <a href="#">
          <img
            id="${item.id}"
            src="${item.img}"
            class="card-img-top"
            alt="Football"
          />
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <a id="oneTitle" href="#">${item.title}</a>
          </h5>
        </div>
        <button onclick="deleteCart(${item.id})">Delete</button>
      </div>
    </div>`;
  }
}
drawCart();
function deleteCart(id) {
  for (let item of cartArr) {
    if (id == item.id) {
      let index = cartArr.indexOf(item);
      cartArr.splice(index, 1);
      localStorage.setItem(`cart`, JSON.stringify(cartArr));

      drawCart();
    }
  }
}
