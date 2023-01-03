export default class Section {
    constructor(imageLink, title, description, type) {
        this.imageLink = imageLink;
        this.title = title;
        this.description = description;
        this.type = type;
    }

    draw(){

        const wrapper = document.querySelector('.services');

            const service = document.createElement('div');
            service.classList.add('service-card');
            service.dataset.type = this.type;

            wrapper.append(service);

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('service__image');
            imageContainer.style.backgroundImage = `url(${this.imageLink})`; 

            service.appendChild(imageContainer);

            const servDescr = document.createElement('div');
            servDescr.classList.add('service__descr');
            service.appendChild(servDescr);

            const h3 = document.createElement('h3');
            h3.textContent = this.title;
            servDescr.append(h3);

            const serviceText = document.createElement('p');
            serviceText.classList.add('service__text');
            serviceText.textContent = this.description;
            servDescr.append(serviceText);
        }
    }
