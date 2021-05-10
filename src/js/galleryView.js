
import { styleForCards,indexOfImg } from './helpers.js';
import {voting }from './model.js'



class GalleryView {

   breedsPhotoConatiner = document.querySelector(`.five-items-container-gal`)

  clear() {
    this.breedsPhotoConatiner.innerHTML = ``
  }
  
  
  async addbreedsGallery(data) {
    this.clear()
    const gallerySelect = document.getElementById(`gal-imgs-list`)
    
    const breeds = await data
    // console.log(breeds);

    breeds.forEach((el, i) => {
      const option = document.createElement(`option`)
      
      const optionTextContent = () => {
        return (el.breeds[0] === undefined ?
          `Name is not provided` : el.breeds[0].name)
      }
      
      option.value = optionTextContent()
      option.innerHTML = optionTextContent()
      gallerySelect.append(option)

      const dogsWrapperCard = document.createElement(`div`)
        styleForCards(dogsWrapperCard, el.url)
      dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)

      const markup = `
      <div class="curtain-gal">
      <svg class="add-itm-tofav">
       <use href="./src/img/icons.svg#heart-empty"></use>
      </svg>
      </div>
      
      `

    
      dogsWrapperCard.insertAdjacentHTML(`afterbegin`, markup)
      dogsWrapperCard.addEventListener('click', (e) => {
        
        
        if (e.target.classList.contains(`voted`) === false) {
          voting(breeds[indexOfImg(e.target.classList)], '', 'favourites')
          e.target.classList.add(`voted`)
          

        } else {
          e.target.classList.remove(`voted`)
          voting(breeds[indexOfImg(e.target.classList)], 0, 'votes')
        } 
      })
  
      
      this.breedsPhotoConatiner.append(dogsWrapperCard)


    })

     
   
  };

   
  

  
}



export default new GalleryView;

