function  markupCountryCard(countries) {
    return countries.map(({ name, capital, population, flags, languages }) => {
        return `<li class="box-country">
            <h1 class="title">Official name: ${name.official}</h1>
            <h2>Capital: ${capital}</h2>
            <p>Population: ${population}</p>
            <p>Flag: 
                <img src="${flags.svg}" alt="${flags.alt}" width="70">
            </p>
            <p>Languages: ${Object.values(languages)}</p>
        </li>`
    }).join('');
}

function markupCountryList (country){
    return country.map(country => { 
        return`<li class="box-country list" style="">
        <img src="${country.flags.png}" alt="${country.flags.alt}" width="75">
        <span>${country.name.official}</span>
        </li>`
    }).join('');
}

export { markupCountryCard, markupCountryList };