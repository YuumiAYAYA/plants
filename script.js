import prices from "./prices.json" assert { type: "json" };
import Price from "./prices.js";

import adress from "./adress.json" assert { type: "json" };
import Adress from "./adress.js";
import AddressWrapper from "./addressWrapper.js";

import services from "./services.json" assert { type: "json" };
import Section from "./services.js";

/* create prices description in the Prices Section */
for (let i = 0; i < prices.length-1; i++) {
  const price = new Price(
    prices[i].name,
    prices[i].description,
    prices[i].type,
    prices[i].id
  );
  price.draw();
}

const pricesBtns = document.querySelectorAll(".price__button");
const closeAllAccordions = () => {
  pricesBtns.forEach((el) => {
    el.classList.remove("clicked");
    el.classList.add("no-clicked");

    el.closest(".price__basics")
      .querySelector(".price__content")
      .classList.add("hidden");
    el.closest(".price__basics")
      .querySelector(".price__content")
      .classList.remove("shown");
  });
};

pricesBtns.forEach((el) =>
  el.addEventListener("click", (e) => {
    if (e.target.classList.contains("no-clicked")) {
      closeAllAccordions();

      e.target.classList.remove("no-clicked");
      e.target.classList.add("clicked");

      e.target
        .closest(".price__basics")
        .querySelector(".price__content")
        .classList.remove("hidden");
      e.target
        .closest(".price__basics")
        .querySelector(".price__content")
        .classList.add("shown");
    } else if (e.target.classList.contains("clicked")) {
      e.target.classList.remove("clicked");
      e.target.classList.add("no-clicked");

      e.target
        .closest(".price__basics")
        .querySelector(".price__content")
        .classList.add("hidden");
      e.target
        .closest(".price__basics")
        .querySelector(".price__content")
        .classList.remove("shown");
    }
  })
);

//Adresses
const addressWrapper = new AddressWrapper(adress.map((ad) => ad.city));
addressWrapper.init();

const selectBtn = document.querySelector(".select__button");
selectBtn.addEventListener("click", (e) => {
  const selHeader = document.querySelector(".select__header");
  if (!e.target.classList.contains("clicked")) {
    selectBtn.classList.add("clicked");
    selHeader.classList.add("sel-header__active");
    addressWrapper.unhide();
  } else if (e.target.classList.contains("clicked")) {
    if (
      e.target.closest(".select__header").querySelector(".select__name")
        .textContent == "City"
    ) {
      selHeader.classList.remove("sel-header__active");
    }
    selectBtn.classList.remove("clicked");
    addressWrapper.hide();
  }
});

const citiesList = document.querySelectorAll(".city-name");
citiesList.forEach((el) => {
  el.addEventListener("click", (e) => {
    const cardsPres = document.querySelectorAll(".contact__card");
    cardsPres.forEach((el) => el.remove());

    const sel = e.target.textContent;
    const selCars = adress.find((el) => el.city == sel);
    new Adress(selCars.city, selCars.phone, selCars.adress).drawCards();

    const selHeader = document.querySelector(".select__name");
    selHeader.textContent = selCars.city;

    addressWrapper.hide();
  });
});

//SERVICES PART

for (let i = 0; i < services.length; i++) {
  let servicesList = new Section(
    services[i].imageLink,
    services[i].title,
    services[i].description,
    services[i].type
  );
  servicesList.draw();
}

const serviceBtnContainer = document.querySelector(".service__buttons");

let activeBtns = []; // data-id ["Gardens"]
let totalBtns = ["Gardens", "Planting", "Lawn"];
serviceBtnContainer.addEventListener("click", (event) => {
  const cards = document.querySelectorAll(".service-card");

  if (event.target.classList.contains("service__button")) {
    if (event.target.classList.contains("service__button-active")) {
      activeBtns = activeBtns.filter((el) => el != event.target.dataset.id);
      event.target.classList.remove("service__button-active");
    } else {
      if (activeBtns.length >= 2) {
        const removed = activeBtns.shift();
        activeBtns.push(event.target.dataset.id);
        document
          .querySelector(`[data-id='${removed}']`)
          .classList.remove("service__button-active");
        event.target.classList.add("service__button-active");
      } else {
        event.target.classList.add("service__button-active");
        activeBtns.push(event.target.dataset.id);
      }
    }

    // inactiveBtns = totalBtns - activeBtns
    const inactiveBtns = totalBtns.filter(
      (btn) => !activeBtns.some((active) => active == btn)
    );

    activeBtns.forEach((id) => {
      const unblurredCards = document.querySelectorAll(`[data-type='${id}']`);
      unblurredCards.forEach((el) => el.classList.remove("blur"));
    });

    inactiveBtns.forEach((id) => {
      const blurredCards = document.querySelectorAll(`[data-type='${id}']`);
      blurredCards.forEach((el) => el.classList.add("blur"));
    });
  }
});

