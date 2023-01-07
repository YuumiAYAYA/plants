export default class AddressWrapper {
  constructor(cities) {
    this.cities = cities;
  }
  init() {
    const wrapper = document.querySelector(".cities");
    wrapper.classList.add("cities__hidden");
    this.cities.forEach((el) => {
      const newCity = document.createElement("p");
      newCity.classList.add("city-name");
      newCity.textContent = el;
      wrapper.append(newCity);
    });  
  }
  hide() {
    const wrapper = document.querySelector(".cities");
    wrapper.classList.add("cities__hidden");
    wrapper.classList.remove("cities__visible");
    const selectBtn = document.querySelector(".select__button");
    selectBtn.classList.remove("clicked");
  }

  unhide() {
    const wrapper = document.querySelector(".cities");
    wrapper.classList.remove("cities__hidden");
    wrapper.classList.add("cities__visible");
  }
  drawCardsUnhide() {
    const card = document.querySelector(".chosen__card");
    card.classList.remove("card__hidden");
  }
}
