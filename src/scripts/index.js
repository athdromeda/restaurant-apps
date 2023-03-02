import 'regenerator-runtime';
import '../styles/main.scss';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CardComponent from './views/components/card-component';
import ReviewContainer from './views/components/review-container';
import DetailContainer from './views/components/detail-container';
import AddReviewSection from './views/components/add-review-section';

customElements.define('card-component', CardComponent);
customElements.define('review-container', ReviewContainer);
customElements.define('detail-container', DetailContainer);
customElements.define('add-review', AddReviewSection);

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('ul'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
