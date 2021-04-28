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
   
  


   generateLikeLog(state) {
    const html =  `<li class="action-list-item favs">
    <span class="time">${this.hrs}:${this.minutes}</span>Image ID:
    <span class="img-id">${state.id}</span> was added to Likes
    <svg class="added-to-like">
      <use href="./src/img/icons.svg#smiling-face"></use>
    </svg>
    </li>`
     this.actionList.insertAdjacentHTML(`afterbegin`, html)
   }




}

export default new VotingView;