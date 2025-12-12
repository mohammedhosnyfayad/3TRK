fetch("data.json")
  .then((response) => response.json())
  .then((prodcuts) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let swiperWrapper = document.querySelector(".swiper-wrapper-ALL");

    prodcuts.forEach((e) => {
      let aciveclass = cart.some((AC) => AC.id == e.id);

      swiperWrapper.innerHTML += `
      
        <div class="swiper-slide">
          <div class="card">
            <img src="${e.img}" alt="${e.name}" />
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text">${e.details}</p>
              <p class="text-danger fw-bold">${e.price} $</p>
              <button class="add ${aciveclass ? "none" : ""} " data-index=${
        e.id
      }>
                <i class="fa-solid fa-cart-shopping shopping "></i> add to cart
              </button>
            </div>
          </div>
        </div>

      `;
    });

    prodcuts.forEach((e) => {
      let aciveclass = cart.some((AC) => AC.id == e.id);

      let swiperWrapper = document.querySelector(".swiper-wrapper-man");

      if (e.category === "Men") {
        swiperWrapper.innerHTML += `
      
        <div class="swiper-slide">
          <div class="card">
            <img src="${e.img}" alt="${e.name}" />
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text">${e.details}</p>
              <p class="text-danger fw-bold">${e.price} $</p>
              <button class="add ${aciveclass ? "none" : ""} " data-index=${
          e.id
        }>
                <i class="fa-solid fa-cart-shopping shopping "></i> add to cart
              </button>
            </div>
          </div>
        </div>

      `;
      }
    });
    prodcuts.forEach((e) => {
      let aciveclass = cart.some((AC) => AC.id == e.id);

      let swiperWrapper = document.querySelector(".swiper-wrapper-Woman");

      if (e.category === "Women") {
        swiperWrapper.innerHTML += `
      
        <div class="swiper-slide">
          <div class="card">
            <img src="${e.img}" alt="${e.name}" />
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text">${e.details}</p>
              <p class="text-danger fw-bold">${e.price} $</p>
              <button class="add ${aciveclass ? "none" : ""} " data-index=${
          e.id
        }>
                <i class="fa-solid fa-cart-shopping shopping "></i> add to cart
              </button>
            </div>
          </div>
        </div>

      `;
      }
    });
    prodcuts.forEach((e) => {
      let swiperWrapper = document.querySelector(".swiper-wrapper-Unisex");
      let aciveclass = cart.some((AC) => AC.id == e.id);

      if (e.category === "Unisex") {
        swiperWrapper.innerHTML += `
      
        <div class="swiper-slide">
          <div class="card">
            <img src="${e.img}" alt="${e.name}" />
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text">${e.details}</p>
              <p class="text-danger fw-bold">${e.price} $</p>
              <button class="add ${aciveclass ? "none" : ""} " data-index=${
          e.id
        }>
                <i class="fa-solid fa-cart-shopping shopping "></i> add to cart
              </button>
            </div>
          </div>
        </div>

      `;
      }
    });
    prodcuts.forEach((e) => {
      let aciveclass = cart.some((AC) => AC.id == e.id);

      let swiperWrapper = document.querySelector(
        ".swiper-wrapper-International"
      );

      if (e.category === "International Brands") {
        swiperWrapper.innerHTML += `
      
        <div class="swiper-slide">
          <div class="card">
            <img src="${e.img}" alt="${e.name}" />
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text">${e.details}</p>
              <p class="text-danger fw-bold">${e.price} $</p>
              <button class="add ${aciveclass ? "none" : ""} " data-index=${
          e.id
        }>
                <i class="fa-solid fa-cart-shopping shopping "></i> add to cart
              </button>
            </div>
          </div>
        </div>

      `;
      }
    });
    prodcuts.forEach((e) => {
      let swiperWrapper = document.querySelector(".swiper-wrapper-Niche");
      let aciveclass = cart.some((AC) => AC.id == e.id);

      if (e.category === "Niche Perfumes") {
        swiperWrapper.innerHTML += `
      
        <div class="swiper-slide">
          <div class="card">
            <img src="${e.img}" alt="${e.name}" />
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text">${e.details}</p>
              <p class="text-danger fw-bold">${e.price} $</p>
              <button class="add ${aciveclass ? "none" : ""}" data-index=${
          e.id
        }>
                <i class="fa-solid fa-cart-shopping shopping "></i> add to cart
              </button>
            </div>
          </div>
        </div>

      `;
      }
    });
    prodcuts.forEach((e) => {
      let swiperWrapper = document.querySelector(".swiper-wrapper-Arabic");
      let aciveclass = cart.some((AC) => AC.id == e.id);

      if (e.category === "Arabic Perfumes") {
        swiperWrapper.innerHTML += `
      
        <div class="swiper-slide">
          <div class="card">
            <img src="${e.img}" alt="${e.name}" />
            <div class="card-body">
              <h5 class="card-title">${e.name}</h5>
              <p class="card-text">${e.details}</p>
              <p class="text-danger fw-bold">${e.price} $</p>
              <button class="add ${aciveclass ? "none" : ""} " data-index=${
          e.id
        }>
                <i class="fa-solid fa-cart-shopping shopping "></i> add to cart
              </button>
            </div>
          </div>
        </div>

      `;
      }
    });

    let btnAdd = document.querySelectorAll(".add");
    btnAdd.forEach((e) => {
      e.addEventListener("click", function (event) {
        let att = event.target.getAttribute("data-index");
        let selected = prodcuts.find((s) => s.id == att);

        let btnAdd = document.querySelectorAll(`.add[data-index="${att}"]`);
        btnAdd.forEach((b) => {
          b.classList.add("none");
        });
        addtocart(selected);
      });
    });
  });
function clearlocal() {
  let clear = document.querySelector(".clear");

  clear.addEventListener("click", function () {
    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    updatecart();

    let btnAdd = document.querySelectorAll(".add");

    btnAdd.forEach((e) => {
      e.classList.remove("none");
    });
  });
}

clearlocal();
