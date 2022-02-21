import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import './css/styles.css';
import countryCardInfo from './templates/card-country-info';
import countriesCards from './templates/countries-cards';
import NewsApiService from './fetchCountries';

const cardContainer = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');
const inputEl = document.querySelector("#search-box");
const DEBOUNCE_DELAY = 300;
const newsApiService = new NewsApiService();

inputEl.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {

    newsApiService.nameCountry = e.target.value.trim();

    if (newsApiService.nameCountry === '') {
        return (countryList.innerHTML = ''), (cardContainer.innerHTML = '');
      }

    newsApiService.fetchCountries()
    .then(data => {
        console.log(data);
        if (data.length > 10) {
            clearListCountries();
            return Notify.info(`Too many matches found. Please enter a more specific name.`);
        } else if (data.length >= 2 && data.length <= 10) {
            clearListCountries();
            return countryList.insertAdjacentHTML('beforeend', countriesCards(data));
        } else if (data.length === 1) {
            clearListCountries();
            return cardContainer.insertAdjacentHTML('afterbegin', countryCardInfo(data));
        } else {
            clearListCountries();
            Notify.failure(`Oops, there is no country with that name`);
        };
    });     
};

function clearListCountries() {
    countryList.innerHTML = '';
    cardContainer.innerHTML = '';
};
        

    








    
      









        
     
