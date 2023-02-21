class ReviewContainer extends HTMLElement {
  connectedCallback() {
    this.name = this.getAttribute('name') || null;
    this.date = this.getAttribute('date') || null;
    this.review = this.getAttribute('review') || null;
    this.render();
  }

  render() {
    const card = document.createElement('div');
    card.classList.add('review-card');

    const header = document.createElement('div');
    header.classList.add('review-header');
    header.innerHTML = `
        <img src="https://i.pravatar.cc/45?u=${this.name}" alt="${this.name}" >
        <p><a href="/user/${this.name}">${this.name}</a> 
        <br>${this.date}</p>
        `;

    const content = document.createElement('div');
    content.classList.add('review-content');
    content.innerHTML = `<i>"${this.review}"</i>`;

    card.appendChild(header);
    card.appendChild(content);

    this.innerHTML = card.outerHTML;
  }
}

export default ReviewContainer;
