const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
import presentDrinks from './src/presentDrinks.js'
import './src/searchForm.js'

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL)
})