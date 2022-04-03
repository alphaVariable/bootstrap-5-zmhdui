import './styles.scss';
import 'bootstrap/js/dist/collapse';

// get data from json file
import data from '/site_data/home_page.json';

// utility functions for the app vanilla js
function qs(selector) {
  return document.querySelector(selector);
}
function qsa(selector) {
  return document.querySelectorAll(selector);
}

// set meta
qs('meta[name="description"]').setAttribute(
  'content',
  data.data.doorsteps_home_page.meta_data.meta_description
);
qs('title').text = data.data.doorsteps_home_page.meta_data.meta_title;

//inject data into the page
// using classes as classes have lower specificity than ids, also reusable
// using innerHTML for convenience, not a goo practice to be using on prod
qs('.hero__h1').innerHTML = data.data.doorsteps_home_page.hero.heading_h1;
qs('.hero__p').innerHTML = data.data.doorsteps_home_page.hero.copy;
qs('.hero__img').setAttribute(
  'src',
  data.data.doorsteps_home_page.hero.image.url
);
console.log(data.data.doorsteps_home_page.hero.url);
qs('.hero__cta').setAttribute(
  'href',
  data.data.doorsteps_home_page.hero.cta.url
);
qs('.hero__cta').text = data.data.doorsteps_home_page.hero.copy;

console.table(data.data.doorsteps_home_page.hero.heading_h1);
