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

//inject data into the page

// using innerHTML for convenience, not a goo practice to be using on prod
qs('.hero__h1').innerHTML = data.data.doorsteps_home_page.hero.heading_h1;


console.table(data.data.doorsteps_home_page.hero.heading_h1);
