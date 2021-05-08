import { styleForCards } from './helpers.js'
import LikedImgs from './likedImgs.js'




class Favourites  {
    likedContainer = document.querySelector(`.five-items-container-likes`)
    sectionMark = document.querySelector(`.section-mark-result`)

async renderFavourites(data, section) {
   
    this.sectionMark.textContent = section

    const imgs = await data
    this.likedContainer.innerHTML = ``
    console.log(imgs);

    imgs.forEach((img, i) => {
        
        const dogsWrapperCard = document.createElement(`div`)
        styleForCards(dogsWrapperCard, img.image.url)
      dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)

      const heartWrapper = document.createElement(`div`)
      heartWrapper.classList.add(`curtain-gal`)

      const svgWrapp = document.createElement(`svg`)
      svgWrapp.classList.add(`add-itm-tofav`)
      

      const use = document.createElement(`use`)
      use.id = `use`
    //   use.setAttribute('href', `../img/icons.svg#heart-empty`)
      

    //  console.log(el.id);
      svgWrapp.append(use)
      heartWrapper.append(svgWrapp)
      dogsWrapperCard.append(heartWrapper)

      this.likedContainer.append(dogsWrapperCard)
    })


}

}
export default new Favourites

