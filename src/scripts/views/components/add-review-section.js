class AddReviewSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const section = document.createElement('div');
    section.classList.add('add-review');

    const name = document.createElement('input');
    const review = document.createElement('textarea');
    const submitButton = document.createElement('button').innerHTML('Submit');

    section.appendChild(name);
    section.appendChild(review);
    section.appendChild(submitButton);

    this.innerHTML = section.outerHTML;
  }
}

export default AddReviewSection;
