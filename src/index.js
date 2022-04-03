import './styles.scss';
import 'bootstrap/js/dist/collapse';


// get data from json file
import data from '/site_data/home_page.json';

// utility functions for the app
qs = (selector) => document.querySelector(selector);
qsa = (selector) => document.querySelectorAll(selector);


//inject data into the page