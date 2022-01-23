import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const urlID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const presentDrink = async () => {
    const id = localStorage.getItem('drink')
    if(!id) {
        window.location.replace('./index.html')
    }
    // wait for fetch to be settle
    const drink = await fetchDrinks(`${urlID}${id}`)
    // then display it in browser
    displayDrink(drink)
}

window.addEventListener('DOMContentLoaded', presentDrink)