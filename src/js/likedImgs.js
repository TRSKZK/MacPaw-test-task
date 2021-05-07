import { View } from './starter-view.js'
import {styleForCards} from './helpers.js'

class LikedImgs extends View {
    likedContainer = document.querySelector(`.five-items-container-likes`)
     sectionMark = document.querySelector(`.section-mark-result`)
   

    constructor() {
        super()
    }
    clear() {
        this.likedContainer.innerHTML = ``
        
   }

    async renderLikedImgs(data, section) {
        
        
        this.sectionMark.textContent = section
        
        const imgs = await data

        console.log(data);
        imgs.forEach((img, i) => {
          
            const dogsWrapperCard = document.createElement(`div`)
            styleForCards(dogsWrapperCard, img)
            dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)
            
            this.likedContainer.append(dogsWrapperCard)

      })
    

   
 }

    
    async renderSearchImgs(data, section) {
        this.sectionMark.textContent = section
        const info = await data

        console.log(info);

        const dogsWrapperCard = document.createElement(`div`)
        console.log(info.url);
        styleForCards(dogsWrapperCard, info.url)
        dogsWrapperCard.classList.add('dogs-img', `img-1`)
        
        const curtain = document.createElement(`div`)
        curtain.classList.add(`curtain`)
        curtain.textContent = `${info.name.split(' ').slice(0, 3)}`
        dogsWrapperCard.append(curtain)

            
            this.likedContainer.append(dogsWrapperCard)

 }

}




export default new LikedImgs