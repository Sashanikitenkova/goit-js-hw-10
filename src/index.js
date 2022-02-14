import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './css/styles.css';
import countryCardInfo from './templates/card-country-info';
import countriesCards from './templates/countries-cards';
// import API from './fetchCountries';
import NewsApiService from './fetchCountries';

const cardContainer = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
const inputEl = document.querySelector("#search-box");
const DEBOUNCE_DELAY = 1000;
const newsApiService = new NewsApiService();

inputEl.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {

    newsApiService.nameCountry = e.target.value;
    newsApiService.fetchCountries().then(data => {
        console.log(data);
        if (data === undefined) {
            return Notify.failure(`Oops, there is no country with that name`);
        } else if (data.length > 10) {
            return Notify.info(`Too many matches found. Please enter a more specific name.`);
        } else if (data.length > 2 && data.length <10) {
            return countryList.insertAdjacentHTML('beforeend', countriesCards);
        } else if (data.length === 1) {
            return cardContainer.insertAdjacentHTML('afterbegin', countryCardInfo);
        };
    });
        
};
        
    
    






        // function onSearch(e) {
//       const searchQuery = e.target.value;
    
//       API.fetchCountries(searchQuery)
//          .then(renderCountryCard)
//          .catch(Notify.failure(`Oops, there is no country with that name`));
//     };
    
//     function renderCountryCard(country) {

//         if (country === undefined) {
//             return Notify.failure(`Oops, there is no country with that name`);
//         } else if (country > 10) {
//             return Notify.info(`Too many matches found. Please enter a more specific name.`);
//         } else if (country > 2 && country <10) {
//             const markup = CountriesCards(country);
//             countryList.innerHTML = markup;
//         } else if (country === 1) {
//             const markup = countryCardInfo(country);
//             cardContainer.innerHTML = markup;
//         };
//     };

    
      









        
     
