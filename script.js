
// https://www.superheroapi.com/api.php/211022344610929/245

const SUPERHERO_TOKEN = "211022344610929";
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.querySelector("#new-hero-btn");

const heroImageDiv = document.querySelector("#heroImage");

const searchButton = document.querySelector("#search-btn");

const searchInput = document.querySelector("#search-input");


// ! Function for getting random super hero
const getSuperHero = (id) => {

    fetch(`${BASE_URL}/${id}`)

        .then(response => response.json())

        .then(json => {
            const superHero = json;
            showHeroInfo(superHero);
        })
}

// !Function for showing super hero info
const showHeroInfo = (character) => {

    const name = `<h2>${character.name}</h2>`;

    const img = `<img src = "${character.image.url}" height=200 witdh=200 />`;

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join("");

    heroImageDiv.innerHTML = `${name}${img}${stats}`;
}


// ! Function for getting super hero on searching
const getSearchSuperHero = (name) => {

    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0];

            showHeroInfo(hero);
        })
}

// ! Function for generating random number
const randomHero = function () {
    const numberOfHeroes = 731;
    return Math.floor(Math.random() * numberOfHeroes) + 1;
}

newHeroButton.onclick = () => {
    getSuperHero(randomHero());
}

searchButton.onclick = () => {
    getSearchSuperHero(searchInput.value);
}
