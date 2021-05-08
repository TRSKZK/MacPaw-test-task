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
        this.likedContainer.innerHTML = ``

        console.log(data);
        imgs.forEach((img, i) => {
          
            const dogsWrapperCard = document.createElement(`div`)
            styleForCards(dogsWrapperCard, img)
            dogsWrapperCard.classList.add('dogs-img', `img-${i + 1}`)
            

            
            this.likedContainer.append(dogsWrapperCard)

      })
    

   
 }

    
    async renderSearchImgs(data, section, count) {
        this.sectionMark.textContent = section
        const info = await data

        console.log(count);
    
        const dogsWrapperCard = document.createElement(`div`)
        console.log(info.url);
        styleForCards(dogsWrapperCard, info.url)
        dogsWrapperCard.classList.add('dogs-img', `img-${count}`)
        
        const curtain = document.createElement(`div`)
        curtain.classList.add(`curtain`)
        curtain.textContent = `${info.name.split(' ').slice(0, 3)}`
        dogsWrapperCard.append(curtain)

            
            this.likedContainer.append(dogsWrapperCard)

 }

    
        renderSpinner() {
            const markup = `
            <div class="spinner">
                    <svg id="spinner">
                      <use href="./src/img/icons.svg#in-progress"></use>
                    </svg>
                  </div>
            `;
             this.likedContainer.innerHTML = ``;
            this.likedContainer.insertAdjacentHTML(`afterbegin`, markup);
          };
    

}




export default new LikedImgs