/* eslint-disable operator-linebreak */
import FavoriteRestoIdb from '../data/favorite-resto-idb';

const LikeButtonInitiator = {
  async init(resto) {
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;
    if (await this._isRestoExist(id)) {
      this._renderUnlikeButton();
    } else {
      this._renderLikeButton();
    }
  },

  _renderLikeButton() {
    document.getElementById('likeButtonContainer').innerHTML =
      '<button id="likeButton" class="like-button" aria-label="like this resto">❤</button>';
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      this._addResto();
      this._renderButton();
    });
  },

  _renderUnlikeButton() {
    document.getElementById('likeButtonContainer').innerHTML =
      '<button id="likeButton" class="like-button liked" aria-label="unlike this resto">❤</button>';
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      this._deleteResto();
      this._renderButton();
    });
  },

  async _addResto() {
    await FavoriteRestoIdb.putResto(this._resto);
  },

  async _deleteResto() {
    await FavoriteRestoIdb.deleteResto(this._resto.id);
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },
};

export default LikeButtonInitiator;
