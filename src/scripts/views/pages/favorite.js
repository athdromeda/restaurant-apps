/* eslint-disable indent */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Favorite = {
  async render() {
    return `
      <h1 id="favorite-page">Favorite Restaurants</h1>
      <hr>
  <section id="maincontent"></section>
  `;
  },

  async afterRender() {
    const mainSection = document.querySelector('section');

    try {
      const restaurants = await FavoriteRestoIdb.getAllRestos();

      if (restaurants.length === 0) {
        mainSection.innerHTML = '<h3>Belum ada restoran yang disuka</h3>';
        return;
      }

      restaurants.forEach((e) => {
        const card = document.createElement('card-component');
        card.setAttribute('name', e.name);
        card.setAttribute('city', e.city);
        card.setAttribute('id', e.id);
        card.setAttribute('pictureId', e.pictureId);
        card.setAttribute('rating', e.rating);
        card.setAttribute('description', e.description);

        mainSection.appendChild(card);
      });
    } catch (err) {
      console.error(err);
      mainSection.innerText = 'Error display data';
    }
  },
};

export default Favorite;
