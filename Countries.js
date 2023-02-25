const loadCountries=()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}

const displayCountries=(countries)=>{
    const countriesContainer=document.getElementById("all-countries");
    countries.forEach(country => {
        console.log(country);
        const countryDiv=document.createElement("div");
        countryDiv.classList.add("style")
        countryDiv.classList.add("style");
        countryDiv.innerHTML=`
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital?country.capital:"No Capital"}<p>
        <button onclick="displayDetails('${country.cca2}')">Details</Button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
    };

    const displayDetails=code=>{
        const url=`https://restcountries.com/v3.1/alpha/${code}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>displayCountryDetails(data[0]));
    }

    const displayCountryDetails=country=>{
        console.log(country);
        const detailsContainer=document.getElementById('country-details');
        detailsContainer.innerHTML=`
        <h3>Name: ${country.name.common} </h3>
        <img src="${country.flags.png}">
        `
    }

    loadCountries();