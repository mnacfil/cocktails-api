import displayDrinks from './displayDrinks.js';
import fetchDrinks from './fetchDrinks.js'
import setDrink from './setDrink.js'

const showDrinks = async(url) =>{
  //fetch drink
  const data = await fetchDrinks(url)
  // display drink
  const section = await displayDrinks(data)
  if(section) {
    setDrink(section)
  }
}

export default showDrinks