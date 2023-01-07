export default class Adress {
  constructor(city, phone, adress) {
    this.city = city;
    this.phone = phone;
    this.adress = adress;
  }

  drawCards() {
    const wrapper = document.querySelector(".select-wrapper");

    const card = document.createElement("div");
    card.classList.add("contact__card");
    wrapper.append(card);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card__content");
    card.append(cardContent);

    const cardColumn1 = document.createElement("div");
    cardContent.append(cardColumn1);

    const cardColumn2 = document.createElement("div");
    cardContent.append(cardColumn2);

    const cityTytle = document.createElement("p");
    cityTytle.classList.add("card__titles");
    cityTytle.textContent = "City:";
    cardColumn1.append(cityTytle);

    const cityPhone = document.createElement("p");
    cityPhone.classList.add("card__titles");
    cityPhone.textContent = "Phone:";
    cardColumn1.append(cityPhone);

    const cityAdress = document.createElement("p");
    cityAdress.classList.add("card__titles");
    cityAdress.textContent = "Office adress:";
    cardColumn1.append(cityAdress);

    const cityCard = document.createElement("p");
    cityCard.classList.add("city__card");
    cityCard.textContent = this.city;
    cardColumn2.append(cityCard);

    const cityPhoneNumber = document.createElement("p");
    cityPhoneNumber.classList.add("city__card");
    cityPhoneNumber.textContent = this.phone;
    cardColumn2.append(cityPhoneNumber);

    const cityAdressFull = document.createElement("p");
    cityAdressFull.classList.add("city__card");
    cityAdressFull.textContent = this.adress;
    cardColumn2.append(cityAdressFull);

    const callBtn = document.createElement("button");
    callBtn.classList.add("call-btn");
    callBtn.setAttribute("type", "button");
    callBtn.textContent = "Call us";
    card.append(callBtn);

    callBtn.addEventListener("click", () => {
      document.location = `tel:${this.phone}'`;
    });
  }


}
