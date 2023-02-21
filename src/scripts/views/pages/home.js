import RestaurantsDB from '../../data/restaurants-db';

const Home = {
  async render() {
    return `<div id="hero">
    <div>
      <h1>Temukan Resto Terbaik di Kotamu!</h1>
      <p>
        <b>CariResto</b> memberikanmu rekomendasi restoran yang worth it untuk
        kamu coba
      </p>
    </div>
  </div>
  <h2>Sedang Hits</h2>
  <hr />
  <section id="maincontent">
  <div id="loading-data-icon"></div>
  </section>
  `;
  },

  async afterRender() {
    const mainSection = document.querySelector('section');

    try {
      const restaurants = await RestaurantsDB.restaurantList();
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

      document.getElementById('loading-data-icon').remove();
    } catch (err) {
      console.error(err);
      mainSection.innerText = 'Error display data';
    }
  },
};

export default Home;
