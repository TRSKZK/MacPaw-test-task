import { View } from './starter-view.js'
import { styleForCards,indexOfImg } from './helpers.js';
import {voting }from './model.js'
// import icons from 'url:../img/icons.svg'


class GalleryView extends View {

   breedsPhotoConatiner = document.querySelector(`.five-items-container-gal`)
    constructor() {
        super()
    }

  clear() {
    this.breedsPhotoConatiner.innerHTML = ``
  }
  
  
  async addbreedsGallery(data) {
    this.clear()
    const gallerySelect = document.getElementById(`gal-imgs-list`)
    
    const breeds = await data
    console.log(breeds);

    breeds.forEach((el, i) => {
      const option = document.createElement(`option`)
      const optionTextContent = () =>{ return ( el.breeds[0] === undefined ? `Name is not provided` : el.breeds[0].name)}
      
      option.value = optionTextContent()
      option.innerHTML = optionTextContent()
      gallerySelect.append(option)

      const dogsWrapperCard = document.createElement(`div`)
        styleForCards(dogsWrapperCard, el.url)
      dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)

      const heartWrapper = document.createElement(`div`)
      heartWrapper.classList.add(`curtain-gal`)

      const svgWrapp = document.createElement(`svg`)
      svgWrapp.classList.add(`add-itm-tofav`)
      

      const use = document.createElement(`use`)
      use.id = `use`
      use.setAttribute('href', `../img/icons.svg#heart-empty`)
      document.getElementById(`use`)

     console.log(el.id);
      svgWrapp.append(use)
      heartWrapper.append(svgWrapp)
      dogsWrapperCard.append(heartWrapper)
      dogsWrapperCard.addEventListener('click', (e) => {
        let indexForVote = indexOfImg(e.target.classList)
        voting(breeds[indexForVote], '', 'favourites')
        
      })
  
      
      this.breedsPhotoConatiner.append(dogsWrapperCard)


    })

     
   
  };

   
  

  
}



export default new GalleryView;

