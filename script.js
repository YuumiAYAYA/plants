import prices from "./prices.json" assert { type: "json" };
import Price from "./prices.js";

import adress from "./adress.json" assert { type: "json" };
import Adress from "./adress.js";

import services from "./services.json" assert { type: "json" };
import Section from "./services.js";

/* create prices description in the Prices Section */
for (let i = 0; i < prices.length; i++) {
    let price = new Price(prices[i].name, prices[i].description, prices[i].type, prices[i].type);   
     price.draw();   
} 

const pricesBtnsContainer = document.querySelector('.price_list');
const pricesBtns = document.querySelectorAll('.no-clicked');
pricesBtns.forEach(el => el.addEventListener('click', (e) => {

    if(e.target.classList.contains('no-clicked')){


        pricesBtns.forEach(el => {

            el.classList.remove('clicked');
            el.classList.add('no-clicked');
   
            el.closest('.price__basics').querySelector('.price__content').classList.add('hidden');
            el.closest('.price__basics').querySelector('.price__content').classList.remove('shown');
       })

       e.target.classList.remove('no-clicked');
       e.target.classList.add('clicked');

       e.target.closest('.price__basics').querySelector('.price__content').classList.remove('hidden');
       e.target.closest('.price__basics').querySelector('.price__content').classList.add('shown');
      
    }
    else if (e.target.classList.contains('clicked')){

        e.target.classList.remove('clicked');
        e.target.classList.add('no-clicked');

        e.target.closest('.price__basics').querySelector('.price__content').classList.add('hidden');
        e.target.closest('.price__basics').querySelector('.price__content').classList.remove('shown');

    }
}))

//Adresses


for (let i = 0; i < adress.length; i++) {
    let adresses = new Adress(adress[i].city);   
    adresses.draw();
    adresses.hide(); 
} 


const selectBtn = document.querySelector('.select__button');
selectBtn.addEventListener('click', (e)=> {
const selHeader = document.querySelector('.select__header');


    if(e.target.classList.contains('unclicked')) {
        selectBtn.classList.remove('unclicked');
        selectBtn.classList.add('clicked');
        selHeader.classList.add('sel-header__active');
        const ayaya2 = new Adress().unhide();
    }
    else if(e.target.classList.contains('clicked')){
        if(  e.target.closest('.select__header').querySelector('.select__name').textContent == "City"){
            selHeader.classList.remove('sel-header__active');
        }
        selectBtn.classList.add('unclicked');
        selectBtn.classList.remove('clicked');
        const ayaya2 = new Adress().hide();
    }

})

const citiesList = document.querySelectorAll('.city-name');
citiesList.forEach(el => {
    
    el.addEventListener('click', (e)=>{

        const cardsPres = document.querySelectorAll('.contact__card');
        cardsPres.forEach(el => el.remove());

        const sel = e.target.textContent;
        const selCars = adress.find(el => el.city == sel);
        const chosenCard = new Adress(selCars.city, selCars.phone, selCars.adress).drawCards();

        const selHeader = document.querySelector('.select__name');
        selHeader.textContent = selCars.city;

    })
})

//SERVICES PART

for (let i = 0; i < services.length; i++) {
    let servicesList = new Section(services[i].imageLink, services[i].title, services[i].description, services[i].type);   
    servicesList.draw();
} 

const serviceButns = document.querySelectorAll('.service__button');
const serviceBtnContainer = document.querySelector('.service__buttons');

let arrBtns = [];
let activeCards = [];

serviceBtnContainer.addEventListener('click', (event) => {
    const cards = document.querySelectorAll('.service-card');
   

if (event.target.classList.contains('service__button')){
    if (event.target.classList.contains('service__button-active')) {
        event.target.classList.remove('service__button-active');
        arrBtns = []; 
        activeCards = [];
        document.querySelectorAll('.service__button-active').forEach (el => arrBtns.push(el));

    }
    else {
        if(arrBtns.length >=2){
        arrBtns.shift();
        arrBtns.push(event.target);
        serviceButns.forEach(el => el.classList.remove('service__button-active'));
        arrBtns.forEach(el => el.classList.add('service__button-active'));
        }
        else if (arrBtns.length < 2){
        event.target.classList.add('service__button-active');
        arrBtns.push(event.target);
         }
    }
let activebtnsnames = []; arrBtns.forEach((el) => {activebtnsnames.push(el.dataset.id) });
let activebtnsnames2 = []; cards.forEach((el) => 
{
    if(el.dataset.type == activebtnsnames[0] || el.dataset.type == activebtnsnames[1]) {
        activebtnsnames2.push(el)
    }
}
)
cards.forEach(el => el.classList.add('blur'))
activebtnsnames2.forEach(el => el.classList.remove('blur'))
}})
