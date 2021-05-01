import { View } from './starter-view.js';
import {showSelectedBreed, selectedBreedRender, styleFetchImg,styleForCards} from './helpers.js'
import { CONTAINER } from './helpers.js';
  

class BreedsView extends View {
  breedsSelectedImg = document.querySelector(`.breeds-selected-img`)
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
        styleForCards(dogsWrapperCard, el.image.url)
      dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)
      
      
      const curtain = document.createElement(`div`)
      curtain.classList.add(`curtain`)
      curtain.textContent = `${el.name.split(' ').slice(0,3)}`
      
      
      const dogImg = document.createElement(`img`)
      dogImg.classList.add(`dogs-picture`)


        const options = document.createElement(`option`)
        options.innerHTML = `${el.name}`
        options.value = `${el.name}`
      
        dogsWrapperCard.append(dogImg, curtain)
        breedsPhotoConatiner.append(dogsWrapperCard)
        breedsOptionsContainer.append(options)
        
        dogsWrapperCard.addEventListener('click', (e) => {
          
          const indexOfImg = () => parseInt(e.target.classList.toString().slice(-1) - 1) < 0 ||  parseInt(e.target.classList.toString().slice(-2) - 1) >= 10 ? parseInt(e.target.classList.toString().slice(-2) - 1) : parseInt(e.target.classList.toString().slice(-1) - 1);
          console.log(indexOfImg());
          
          let selectedItem = breeds[indexOfImg()]
          let img = selectedItem.image.url
          console.log(selectedItem);
          let { temperament, height, weight, life_span, name, bred_for, id } = selectedItem
          
          selectedBreedRender({ temperament, height, weight, life_span, name, bred_for, id })
          styleFetchImg(this.breedsSelectedImg, img)
          showSelectedBreed()
          
          this.breedsSelected.classList.remove(`visibility`)
        })
      });
      
    }

}



export default new BreedsView

