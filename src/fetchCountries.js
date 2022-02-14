
// export default {fetchCountries};


// function fetchCountries(countryId) {
   
//     console.log(countryId);
//     const url = `https://restcountries.com/v2/name/${countryId}?fields=name,capital,population,flags,languages`;
  
//     return fetch(url)
//       .then(response => {
//           return response.json();
//       });
//   };
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export default class NewsApiService {
    constructor() {
        this.country = '';
    }

    fetchCountries() {
   
        const url = `https://restcountries.com/v2/name/${this.country}?fields=name,capital,population,flags,languages`;
      
        return fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(response.status);
              }
              return response.json();
          })
          .catch(Notify.failure('Oops, there is no country with that name'));
      };

      get nameCountry() {
          return this.country;
      }

      set nameCountry(newCountry) {
          this.country = newCountry;
      }
    
};




