class DetailContainer extends HTMLElement {
  connectedCallback() {
    this.data = this.getAttribute('data') || null;
    this.parsedData = JSON.parse(this.data);
    this.render();
  }

  render() {
    const foods = this.parsedData.menus.foods.map((f) => f.name).join(', ');
    const drinks = this.parsedData.menus.drinks.map((f) => f.name).join(', ');
    const tags = this.parsedData.categories.map((tag) => `<div id="tag">#${tag.name.toLowerCase()}</div>`).join('');

    this.innerHTML = `
    <style>
    .detail {
      margin-top: 140px;
    }
    
    h1 {
      font-size: 2.4em;
    }
    
    .tags {
      display: flex;
    }
    
    #tag {
      background: #ffa53f;
      color: #29303a;
      padding: 4px 8px;
      border-radius: 4px;
      margin: 5px 4px 20px 0;
    }
    
    p {
      font-size: 1.1em;
    }
  
    p:first-of-type {
        text-indent: 50px;
    }
    </style>

    <h1>${this.parsedData.name}</h1>
      <h3>${this.parsedData.address}, ${this.parsedData.city}</h3>
      <div>${'★'.repeat(Math.round(this.parsedData.rating))}${'☆'.repeat(5 - Math.round(this.parsedData.rating))} ${this.parsedData.rating}</div>
      <div class="tags">${tags}</div>
      <img id="headline" src='https://restaurant-api.dicoding.dev/images/medium/${this.parsedData.pictureId}' width="150px"/>
    <p>${this.parsedData.description}</p>
    <p><b>Menu makan:</b> ${foods}</p>
    <p><b>Menu minum:</b> ${drinks}</p>
    `;
  }
}

export default DetailContainer;
