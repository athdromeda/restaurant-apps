import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Unliking a resto =>', () => {
  const createLikeButtonElement = () => {
    document.body.innerHTML = `<div id="likeButtonContainer"></div>`;
  };

  beforeEach(async () => {
    createLikeButtonElement();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('Should show unlike button if the resto has been liked', async () => {
    await LikeButtonInitiator.init({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  it('should be able to unlike resto', async () => {
    await LikeButtonInitiator.init({ id: 1 });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event('click'));
    const allRestos = await FavoriteRestoIdb.getAllRestos();

    expect(allRestos).toEqual([]);
  });

  it('shouldnt throw error if unliked movie isnt in the DB', async () => {
    await LikeButtonInitiator.init({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
