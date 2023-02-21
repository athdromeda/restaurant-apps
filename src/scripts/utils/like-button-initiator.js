import FavoriteRestoIdb from '../data/favorite-resto-idb';

const LikeButtonInitiator = {
  async init(resto) {
    this._resto = resto;
    console.log(resto);

    this._handleClick();
  },

  _handleClick() {
    const { id } = this._resto;
    const likeButton = document.querySelector('#like');
    likeButton.addEventListener('click', async () => {
      if (await this._isRestoExist(id)) {
        this._deleteResto();
        likeButton.classList.remove('liked');
      } else {
        this._addResto();
        likeButton.classList.add('liked');
      }
    });
  },

  async _addResto() {
    await FavoriteRestoIdb.putResto(this._resto);
    console.log(`ALERT!: ${this._resto} added to favorite!`);
  },

  async _deleteResto() {
    await FavoriteRestoIdb.deleteResto(this._resto.id);
    console.log(`ALERT!: ${this._resto} was removed to favorite!`);
    console.log(await FavoriteRestoIdb.getAllRestos());
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },
};

export default LikeButtonInitiator;
