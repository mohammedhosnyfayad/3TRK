let shop = document.querySelector(".shop");
let links_shop = document.querySelector(".links_shop");
let big_shop = document.querySelector(".big_shop");

if (shop) {
  shop.addEventListener("click", function () {
    links_shop.classList.toggle("links_shop_scale");
    big_shop.classList.toggle("big_shop_overflow");
  });
}

let facircleXmark = document.querySelector(".fa-circle-xmark");
let cartBig = document.querySelector(".cart-big");
let content_cart = document.querySelector(".content_cart");

cartBig.addEventListener("click", function () {
  content_cart.classList.toggle("transform");
});
facircleXmark.addEventListener("click", function () {
  content_cart.classList.remove("transform");
});

function updatecart() {
  let center_cart = document.querySelector(".center_cart");
  let data_box = document.querySelector(".data_box");

  let priceTotal = 0;
  let countnum = 0;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (data_box) {
    data_box.innerHTML = "";
  }
  center_cart.innerHTML = "";
  cart.forEach((data, index) => {
    priceall = data.price * data.count;
    priceTotal += data.price * data.count;
    countnum += data.count;
    center_cart.innerHTML += `

      

            <div class="part_items d-flex align-items-center gap-3">
          <img width="70" src="${data.img}" alt="" />
          <div class="box-text">
            <h5 class="m-1">${data.name}</h5>
            <p class="m-2">$${priceall}</p>
            <div class="counts_btn d-flex align-items-center gap-3">
              <button class="plusnum" data-num=${index}>+</button>
              <span>${data.count}</span>
              <button class="minusnum" data-num=${index}>-</button>
            </div>
          </div>
          <button class="fa_trash" data-remove=${index}><i class="fa-solid fa-trash"></i></button>
        </div>

    
    `;

    if (data_box) {
      data_box.innerHTML += `
              <div class="check p-5">
            <img width="70" src="${data.img}" alt="" />
            <div class="check_text">
              <h5>${data.name}</h5>
              <h6>$${priceall}</h6>
              <p>details</p>
              <div class="counts_btn d-flex align-items-center gap-3">
                <button class="plusnum" data-num="${index}">+</button>
                <span>${data.count}</span>
                <button class="minusnum" data-num="${index}">-</button>
              </div>
              
            </div>
                      <button class="fa_trash text-light" data-remove=${index}><i class="fa-solid fa-trash"></i></button>

          </div>


    `;
    }
  });

  let price_total = document.querySelector(".price_total");
  let price_total2 = document.querySelector(".price_total2");
  let top_cart = document.querySelector(".top_cart span");
  let cart_big = document.querySelector(".cart-big span");

  if (price_total2) {
    price_total2.innerHTML = `$${priceTotal}`;
  }
  let btnPrice = document.getElementById("price");
  if (btnPrice) {
    if (cart.length == 0) {
      btnPrice.setAttribute("disabled", false);
    }
  }
  price_total.innerHTML = `$${priceTotal}`;
  top_cart.innerHTML = `${countnum}`;
  cart_big.innerHTML = `${countnum}`;

  let plusnum = document.querySelectorAll(".plusnum");
  let minusnum = document.querySelectorAll(".minusnum");

  plusnum.forEach((e) => {
    e.addEventListener("click", function (event) {
      let ele = event.target.getAttribute("data-num");
      elementplus(ele);
    });
  });
  minusnum.forEach((e) => {
    e.addEventListener("click", function (event) {
      let ele = event.target.getAttribute("data-num");
      elementminus(ele);
    });
  });

  let fa_trash = document.querySelectorAll(".fa_trash");

  fa_trash.forEach((e) => {
    e.addEventListener("click", (event) => {
      let remoe = event.target.closest("button").getAttribute("data-remove");
      removelement(remoe);
    });
  });
}
function addtocart(selected) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let a = cart.push({ ...selected, count: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  updatecart();
}

function elementplus(elementplus) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart[elementplus].count += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  updatecart();
}
function elementminus(elementminus) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart[elementminus].count > 1) {
    cart[elementminus].count -= 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updatecart();
}
function removelement(remoe) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let indexremove = cart.splice(remoe, 1)[0];

  localStorage.setItem("cart", JSON.stringify(cart));
  updatecart();
  backbtn(indexremove.id);
}

function backbtn(indexremove) {
  let btnAdd = document.querySelectorAll(`.add[data-index="${indexremove}"]`);
  console.log(btnAdd);

  btnAdd.forEach((e) => {
    e.classList.remove("none");
  });
}
function clearlocal() {
  let clear = document.querySelector(".clear");

  clear.addEventListener("click", function () {
    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    updatecart();

    let btnAdd = document.querySelectorAll(".check");

    btnAdd.forEach((e) => {
      e.classList.remove("none");
    });
  });
}

let btnPrice = document.getElementById("price");

if (btnPrice) {
  btnPrice.addEventListener("click", function (e) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let customerName = document.getElementById("customerName").value;
    let customerAddress = document.getElementById("customerAddress").value;
    let customerPhone = document.getElementById("customerPhone").value;
    let customerCity = document.getElementById("customerCity").value;

    cart.forEach((e) => {
      let namePro = e.name;
      let pricePro = e.price;
      let details = e.details;

      let neworeder = `
🛍️ *طلب جديد*

📦 *بيانات المنتج*
• *اسم المنتج:* ${namePro}
• *السعر:* ${pricePro} ج.م
• *التفاصيل:* ${details}

👤 *بيانات العميل*
• الاسم: ${customerName}
• رقم الهاتف: ${customerPhone}
• العنوان: ${customerAddress}
• المدينة: ${customerCity}

📅 تم إرسال الطلب بنجاح.
`;
      let whatsappNumber = "201018078546";

      let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        neworeder
      )}`;
      window.open(url, "_blank");
    });
  });
}

const form2 = document.querySelectorAll(".inputs");
if (btnPrice) {
  btnPrice.setAttribute("disabled", "");
}

form2.forEach((input) => {
  input.addEventListener("input", () => {
    const allFilled = Array.from(form2).every(
      (field) => field.value.trim() !== ""
    );

    if (allFilled) {
      btnPrice.removeAttribute("disabled");
    } else {
      btnPrice.setAttribute("disabled", "");
    }
  });
});

clearlocal();
updatecart();
