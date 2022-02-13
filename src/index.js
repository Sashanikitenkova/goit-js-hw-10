import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './css/styles.css';
import countryCardTml from './templates/card-country.hbs';
import API from './fetchCountries';

const cardContainer = document.querySelector('.country-info');
const inputEl = document.querySelector("#search-box");
const DEBOUNCE_DELAY = 300;

inputEl.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));

// function onSearch(e) {
//   e.preventDefault();
//   const searchQuery = e.target;

//   API.fetchCountries(searchQuery)
//      .then(renderCountryCard)
//      .catch(error => Notify.failure(`Oops, there is no country with that name`));
// };

// function renderCountryCard(country) {
//     const markup = countryCardTml(country);
//     cardContainer.innerHTML = markup;
// };




function onSearch(e) {
      e.preventDefault();
      const {value} = e.target;
    
      API.fetchCountries({value})
         .then(renderCountryCard)
         .catch(error => Notify.failure(`Oops, there is no country with that name`));
    };
    
    function renderCountryCard(country) {
        const markup = countryCardTml(country);
        cardContainer.innerHTML = markup;
    };
    


    
      












// return fetch('https://restcountries.com/v2/all')
        
     
