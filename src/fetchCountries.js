export default class NewsApiService {
    constructor() {
        this.country = '';
    }

    fetchCountries() {
   
        const url = `https://restcountries.com/v2/name/${this.country}?fields=name,capital,population,flags,languages`;
      
        return fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Network response was not ok. Status code: ${response.status}.`);
              };
              return response.json();
          });
      };

      get nameCountry() {
          return this.country;
      }

      set nameCountry(newCountry) {
          this.country = newCountry;
      }
};


















