import { View } from './starter-view.js';
import { CONTAINER } from './helpers.js';
  

class BreedsView extends View {


    constructor() {
        super()
    }
    
  setBreedsLimit() {
    const limitEL = document.getElementById(`limit`)
    let limitVal = limitEL.value
    console.log(limitVal);
  }
  
  
    
  async addBreedsOptions(data) {
      const breedsOptionsContainer = document.getElementById(`breeds-selection`)
      const breeds = await data
      breeds.forEach(el => {
        const options = document.createElement(`option`)
        options.innerHTML = `${el.name}`
        options.value = `${el.name}`
        console.log(options);
        breedsOptionsContainer.append(options)
      });
      
    }



}

export default new BreedsView
