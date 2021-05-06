import { View } from './starter-view.js'
import {styleForCards} from './helpers.js'

class LikedImgs extends View {
 likedContainer = document.querySelector(`.five-items-container-likes`)


    constructor() {
        super()
    }
    clear() {
       this.likedContainer.innerHTML = ``
   }

    async renderLikedImgs(data) {
     

        const imgs = await data

        console.log(data);
        imgs.forEach((img, i) => {
          
            const dogsWrapperCard = document.createElement(`div`)
            styleForCards(dogsWrapperCard, img)
            dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)
            
            this.likedContainer.append(dogsWrapperCard)

      })


   
 }


}




export default new LikedImgs