const assert = require('assert');
Feature('Liking Resto');

const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

Scenario('Liking and unlike a resto', async ({ I }) => {
  //Liking resto
  I.amOnPage('/');
  await delay(5000);
  I.waitForElement('.card');
  I.seeElement('.card');

  const firstResto = locate('.card-title > h2').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  I.click(locate('.card').first());

  I.seeElement('#like');
  I.click('#like');

  I.amOnPage('/#/favorite');
  await delay(5000);
  I.seeElement('.card');

  const firstLikedResto = locate('.card-title > h2').first();
  const firstLikedRestoName = await I.grabTextFrom(firstLikedResto);

  assert.strictEqual(firstRestoName, firstLikedRestoName);

  //Unlike resto
  I.amOnPage('/#/favorite');
  await delay(5000);
  I.waitForElement('.card');
  I.seeElement('.card');

  I.amOnPage('/');
  await delay(5000);
  I.waitForElement('.card');
  await I.seeElement('.card');

  assert.strictEqual(firstLikedRestoName, firstRestoName);

  I.click(locate('.card').first());

  I.seeElement('.like-button');
  I.click('.like-button');
});
