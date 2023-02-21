import API_ENDPOINT from '../globals/api-endpoint';

const handlePostReview = {
  init(id) {
    this._id = id;
    const button = document.getElementById('post-review');
    button.addEventListener('click', async () => {
      this._sendReview();
    });
  },

  async _sendReview() {
    const name = document.getElementById('reviewer').value;
    const review = document.getElementById('review-content').value;
    fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this._id,
        name,
        review,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response was not ok!');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById('reviews').innerHTML = '';
        data.customerReviews.forEach((comment) => this._showReview(comment));
      })
      .catch((err) => console.error('Error post comment', err));
  },

  _showReview(review) {
    const reviewSection = document.getElementById('reviews');
    const card = document.createElement('review-container');
    card.setAttribute('name', review.name);
    card.setAttribute('date', review.date);
    card.setAttribute('review', review.review);

    reviewSection.appendChild(card);
  },
};

export default handlePostReview;
