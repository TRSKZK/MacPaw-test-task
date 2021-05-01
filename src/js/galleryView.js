import { View } from './starter-view.js'
import { styleForCards } from './helpers.js'


class GalleryView extends View {
    constructor() {
        super()
    }

  async addbreedsGallery(data) {
    const breedsPhotoConatiner = document.querySelector(`.five-items-container-gal`)

    const breeds = await data

    breeds.forEach((el, i) => {

      const dogsWrapperCard = document.createElement(`div`)
        styleForCards(dogsWrapperCard, el.url)
      dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)

      const heartWrapper = document.createElement(`div`)
      heartWrapper.classList.add(`curtain-gal`)

      const svgWrapp = document.createElement(`svg`)
      svgWrapp.classList.add(`add-itm-tofav`)
      

      const use = document.createElement(`use`)
      use.id = `use`
      document.getElementById(`use`)
      // use.setAttribute('href', '../img/icons.svg#heart-empty')
      console.log(use);

      svgWrapp.append(use.setAttribute('href', '../img/icons.svg#heart-empty'))
      heartWrapper.append(svgWrapp)
      dogsWrapperCard.append(heartWrapper)
      breedsPhotoConatiner.append(dogsWrapperCard)


    })
  
}
  
  
  


  
}



export default new GalleryView;