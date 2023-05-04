import './css/styles.css';
var debounce = require('lodash.debounce');
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { onFetchError } from './js/error';
import { markupCountryCard, markupCountryList } from './js/markup';

const DEBOUNCE_DELAY = 300;
let countryName = '';

const inputSearch = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
inputSearch.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(e) {
    e.preventDefault();

    countryName = e.target.value.trim();

    countryList.innerHTML = '';
    countryInfo.innerHTML = '';

    if(countryName) {
        fetchCountries(countryName).then(renderResults).catch(onFetchError);
    }
}

function renderResults(countries) {
    if (!countries){
        return;
    }

    if(countries.length > 10){
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        return;
    }

    if(countries.length === 1){
        countryInfo.innerHTML = markupCountryCard(countries);
        return;
    }

    if(countries.length > 1 && countries.length <= 10) {
        countryList.innerHTML = markupCountryList(countries);
        return;
    }
}