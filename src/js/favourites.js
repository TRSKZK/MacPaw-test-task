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



      const markup = `
      <div class="curtain-gal">
      <svg class="add-itm-tofav">
       <use href="./src/img/icons.svg#heart-empty"></use>
      </svg>
      </div>
      
      `

      dogsWrapperCard.insertAdjacentHTML(`afterbegin`,markup)

      this.likedContainer.append(dogsWrapperCard)
    })


}

}
export default new Favourites

