import RestaurantsDB from '../../data/restaurants-db';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import handlePostReview from '../../utils/post-review';

const Detail = {
  async render() {
    return `
  <div id="maincontent" tabindex="0" class="detail">
      <div id="loading-data-icon"></div>
  </div>
  <h2>Review Terbaru</h2>
  <hr />
  <section id="reviews"></section>
  <hr />
  <h2>Add Review</h2>
  <div id="add-review">
    <input id="reviewer"/>
    <textarea id="review-content"></textarea>
    <button id="post-review">Submit</button>
  </div>
  <div id="likeButtonContainer"></div>
  `;
  },
  // <button id="likeButton" class="like-button" aria-label="like this movie">❤</button>

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const mainSection = document.getElementById('maincontent');
    const reviewSection = document.getElementById('reviews');

    try {
      const restaurant = await RestaurantsDB.restaurantDetail(url.id);
      const data = await restaurant.restaurant;

      const detail = document.createElement('detail-container');
      detail.setAttribute('data', JSON.stringify(data));
      mainSection.appendChild(detail);

      data.customerReviews.forEach((review) => {
        const card = document.createElement('review-container');
        card.setAttribute('name', review.name);
        card.setAttribute('date', review.date);
        card.setAttribute('review', review.review);

        reviewSection.appendChild(card);
      });

      LikeButtonInitiator.init(data);
      handlePostReview.init(data.id);
      document.getElementById('loading-data-icon').remove();
    } catch (err) {
      console.error(err);
      mainSection.innerText = 'Error display data';
    }
  },
};

export default Detail;
