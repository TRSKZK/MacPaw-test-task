import { View } from './starter-view.js';
import {showSelectedBreed} from './helpers.js'
import { CONTAINER } from './helpers.js';
  

class BreedsView extends View {
  breedsSelected = document.querySelector(`.breeds-selected`)

    constructor() {
        super()
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

        
        dogsWrapperCard.addEventListener('click', (e) => {
          let indexOfImg = e.target.classList.toString().slice(-1) - 1
          let selectedItem = breeds[indexOfImg]
          let img = breeds[indexOfImg].image.url
          let { temperament, height, weight, life_span, name, bred_for, id } = selectedItem
          
          console.log(temperament, height, weight, life_span, name, bred_for, img);
          showSelectedBreed()
          this.breedsSelected.classList.remove(`visibility`)
        })
      });
      
    }

}



export default new BreedsView

