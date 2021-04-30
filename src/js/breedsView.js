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
    const breedsPhotoConatiner = document.querySelector(`.five-items-container`)
    
      const breeds = await data
    breeds.forEach((el, i) => {
      
      const dogsWrapperCard = document.createElement(`div`)
      dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)
      
      
      const curtain = document.createElement(`div`)
      curtain.classList.add(`curtain`)
      curtain.textContent = `${el.name.split(' ').slice(0,3)}`
      
      
      const dogImg = document.createElement(`img`)
      dogImg.classList.add(`dogs-picture`)
      dogImg.src = `${el.image.url}`


        const options = document.createElement(`option`)
        options.innerHTML = `${el.name}`
        options.value = `${el.name}`
      
      
      dogsWrapperCard.append(dogImg, curtain)
      breedsPhotoConatiner.append(dogsWrapperCard)
        breedsOptionsContainer.append(options)
      });
      
    }

  



}

export default new BreedsView
