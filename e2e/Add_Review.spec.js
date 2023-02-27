Feature('Add Review');

const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

const reviewData = {
    name: 'Timmy',
    review: 'Sedapp #e2e'
}

Scenario('Add review to resto', async ({ I }) => {
  I.amOnPage('/');
  await delay(5000);
  I.waitForElement('.card');
  I.seeElement('.card');
  I.click(locate('.card').first());

  I.seeElement('#reviewer');
  I.fillField('#reviewer', reviewData.name)
  I.fillField('#review-content', reviewData.review)
  I.click('#post-review');
  
  await delay(3000);
  I.seeElement('a', {text: reviewData.name});
  I.seeElement('i', {text: reviewData.review});
});
