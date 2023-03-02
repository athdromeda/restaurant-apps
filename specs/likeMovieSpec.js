import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking a resto =>', () => {
  const createLikeButtonElement = () => {
    document.body.innerHTML = `
    <div id="likeButtonContainer">
    </div>
    `;
  };

  beforeEach(() => {
    createLikeButtonElement();
  });

  it('Should show like button', async () => {
    await LikeButtonInitiator.init({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('Shouldnt show unlike button when resto isnt liked yet', async () => {
    await LikeButtonInitiator.init({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like resto', async () => {
    await LikeButtonInitiator.init({ id: 1 });

    document.querySelector('[aria-label="like this resto"]').dispatchEvent(new Event('click'));

    const resto = await FavoriteRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('shouldnt add the resto again if its already liked', async () => {
    await LikeButtonInitiator.init({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);
    FavoriteRestoIdb.deleteResto(1);
  });

  it('shouldnt add resto if resto has no id', async () => {
    await LikeButtonInitiator.init({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
