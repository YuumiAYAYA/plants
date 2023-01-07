export default class Price {
    constructor(name, description, type, id) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.id = id;
    }

    draw (){

        const mainPr = document.querySelector(`[data-price="${this.name}"]`);
     console.log(mainPr)
        const priceContent = document.createElement('div');
        priceContent.classList.add('price__content');
        priceContent.classList.add(`price-${this.id}`);
        priceContent.classList.add("hidden");
        mainPr.appendChild(priceContent);
        const priceDescr = document.createElement('p');
        priceDescr.classList.add('price-descr');
        priceDescr.textContent = this.description;
        priceContent.appendChild(priceDescr);

        const priceAmount = document.createElement('p');
        priceAmount.classList.add('price-amount');
        priceAmount.textContent = this.type+ " / per hour";
        priceContent.appendChild(priceAmount);

        const priceBtn = document.createElement('button');
        priceBtn.classList.add('price-btn');
        priceBtn.addEventListener('click', ()=>
        {
           location.href='#contacts';
        })
        priceBtn.textContent = "Order";
        priceContent.appendChild(priceBtn);

     
    }
}
