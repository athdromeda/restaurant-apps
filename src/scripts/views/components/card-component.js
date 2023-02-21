class CardComponent extends HTMLElement {
  connectedCallback() {
    this.name = this.getAttribute('name') || null;
    this.city = this.getAttribute('city') || null;
    this.id = this.getAttribute('id') || null;
    this.pictureId = this.getAttribute('pictureId') || null;
    this.rating = this.getAttribute('rating') || null;
    this.description = this.getAttribute('description') || null;
    this.render();
  }

  render() {
    const card = document.createElement('a');
    card.classList.add('card');
    card.setAttribute('aria-label', `see ${this.name},${this.city} more detail`);
    card.setAttribute('href', `/#/detail/${this.id}`);
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
          <img class="card-img" src="https://restaurant-api.dicoding.dev/images/small/${this.pictureId}" alt="${this.name},${this.city}" >
          `;

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.innerHTML = `
          <div class="card-title">
          <h2>${this.name}</h2>
          <div class='card-detail'>
              <h3>${this.city}</h3>
                  <div>${'★'.repeat(Math.round(this.rating))}${'☆'.repeat(5 - Math.round(this.rating))} ${this.rating}</div>
          </div>
          </div>`;

    const cardDesc = document.createElement('div');
    cardDesc.classList.add('card-description');
    cardDesc.innerHTML = `<p>${this.description.substring(0, 120)}...</p>`;

    card.appendChild(cardHeader);
    card.appendChild(cardDesc);

    this.innerHTML = card.outerHTML;
  }
}

export default CardComponent;
