import get from './getElement.js';
import {hideLoading} from './toggleLoading.js';

const drinkName = get('.drink-name')
const drinkDesc = get('.drink-desc')
const drinkIngredients = get('.drink-ingredients')
const img = get('.drink-img')

const displaySingleDrink = (data) => {
    // hide loading
    hideLoading()
    const drink = data.drinks[0];
    const {strDrinkThumb:image,strDrink:name,strInstructions:desc} = drink
    console.log(drink);
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
    ];
    img.src = image;
    document.title = name
    drinkName.textContent = name
    drinkDesc.textContent = desc

    drinkIngredients.innerHTML = list.map(item => {
        if(!item) return
        return `<li><i class="far fa-check-square"></i>${item}</li>`
    }).join(' ');
    
}

export default displaySingleDrink