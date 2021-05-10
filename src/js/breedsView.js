
import {
  showSelectedBreed, selectedBreedRender,
  styleFetchImg, styleForCards, indexOfImg
} from './helpers.js'

  

class BreedsView  {
  breedsSelectedImg = document.querySelector(`.breeds-selected-img`)
  breedsSelected = document.querySelector(`.breeds-selected`)
  

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
          
          let selectedItem = breeds[indexOfImg(e.target.classList)]
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

