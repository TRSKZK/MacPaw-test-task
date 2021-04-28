import { View } from './starter-view.js';
import {CONTAINER} from './helpers.js'

 class VotingView extends View {
   data;
   hrs = new Date().getHours();
   minutes = new Date().getMinutes()
   actionList = document.querySelector(`.action-list`)
    constructor() {
        super()
   }
   
  

   insertLog(html) {
    this.actionList.insertAdjacentHTML(`afterbegin`, html)
   }


   generateLikeLog(state) {
    const html =  `<li class="action-list-item favs">
    <span class="time">${this.hrs}:${this.minutes}</span>Image ID:
    <span class="img-id">${state.id}</span> was added to Likes
    <svg class="added-to-like">
      <use href="./src/img/icons.svg#smiling-face"></use>
    </svg>
    </li>`
     this.insertLog(html)
   }

   generateDislikeLog(state) {
     const html = `
     <li class="action-list-item dislike">
     <span class="time"> ${this.hrs}:${this.minutes}</span>Image ID:
     <span class="img-id"> ${state.id}</span> was added to Dislikes
     <svg class="added-to-dislike">
       <use href="./src/img/icons.svg#sad-face"></use>
     </svg>
   </li>
     `
     this.insertLog(html)
   }

   
   generateFavLog(state) {
     const html=
       `
       <li class="action-list-item favs">
       <span class="time">${this.hrs}:${this.minutes}</span>Image ID:
       <span class="img-id">${state.id}</span> was added to Favourites
       <svg class="added-to-favs">
         <use href="./src/img/icons.svg#heart-empty"></use>
       </svg>
     </li>
       `
     
       this.insertLog(html)

   }




}

export default new VotingView;