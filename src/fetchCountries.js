
export default {fetchCountries};

// const BASE_URL = 'https://restcountries.com/v2';

function fetchCountries(countryId) {
    // const url = `${BASE_URL}/name/${countryId}`;
  
    return fetch(`https://restcountries.com/v2/${countryId}`)
      .then(response => {
          return response.json();
      });
  };



