import { View } from './starter-view.js';
import {CONTAINER} from './helpers.js'

 class VotingView extends View {
   data;
   actionList = document.querySelector(`.action-list`)
    constructor() {
        super()
    }

   
   
   
   render(data) {
     this.data = data
     const markup = this.generateMarkUp()
        this.clear()
     CONTAINER.insertAdjacentHTML('afterbegin', markup)
     
      
   }

   clear() {
    CONTAINER.innerHTML = ""
   }
  


   generateLikeLog() {
    const html =  `<li class="action-list-item favs">
    <span class="time"> 22:30</span>Image ID:
    <span class="img-id"> WUDTSYO </span> was added to Favourites
    <svg class="added-to-favs">
      <use href="./src/img/icons.svg#heart-empty"></use>
    </svg>
     </li>`
     this.actionList.insertAdjacentHTML(`afterbegin`, html)
   }



   generateMarkUp() {
      
        return `
        <div class="voting-page">
          <div class="search-container">
            <form class="search">
              <input
                type="text"
                class="search-field"
                placeholder="Search for breeds by name"
              />
              <button class="search-btn">
                <svg class="search-img">
                  <use href="./src/img/icons.svg#search"></use>
                </svg>
              </button>
            </form>
            <div class="btns-container">
              <button class="btn">
                <svg class="likes">
                  <use href="./src/img/icons.svg#smiling-face"></use>
                </svg>
              </button>
              <button class="btn">
                <svg class="favs">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </button>
              <button class="btn">
                <svg class="dislikes">
                  <use href="./src/img/icons.svg#sad-face"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="content-container">
            <div class="nav-btns-container">
              <button class="back-btn">
                <svg class="back-btn-img">
                  <use href="./src/img/icons.svg#arrow-left"></use>
                </svg>
              </button>

              <div class="section-mark">voting</div>
            </div>
            <div class="content-img-container">
              <div class="section-cover" style='background-image:url(${this.data.img})'>
                
              </div>
              <div class="add-buttons-container">
                <button class="btn-add add">
                  <svg class="btn-add-img add">
                    <use class="smiling-face-btn" href="./src/img/icons.svg#smiling-face"></use>
                  </svg>
                </button>

                <button class="btn-add fav">
                  <svg class="btn-favs-img fav">
                    <use href="./src/img/icons.svg#heart-empty"></use>
                  </svg>
                </button>

                <button class="btn-add dislike">
                  <svg class="btn-dislike-img dislike">
                    <use href="./src/img/icons.svg#sad-face"></use>
                  </svg>
                </button>
              </div>
            </div>
            <div class="action-logs-container">
              <ul class="action-list">
                <li class="action-list-item favs">
                  <span class="time"> 22:30</span>Image ID:
                  <span class="img-id"> WUDTSYO </span> was added to Favourites
                  <svg class="added-to-favs">
                    <use href="./src/img/icons.svg#heart-empty"></use>
                  </svg>
                </li>
                <li class="action-list-item like">
                  <span class="time"> 22:30</span>Image ID:
                  <span class="img-id"> WUDTSYO </span> was added to Likes
                  <svg class="added-to-like">
                    <use href="./src/img/icons.svg#smiling-face"></use>
                  </svg>
                </li>
                <li class="action-list-item dislike">
                  <span class="time"> 22:30</span>Image ID:
                  <span class="img-id"> WUDTSYO </span> was added to Dislikes
                  <svg class="added-to-dislike">
                    <use href="./src/img/icons.svg#sad-face"></use>
                  </svg>
                </li>
                <li class="action-list-item removed">
                  <span class="time"> 22:30</span>Image ID:
                  <span class="img-id"> WUDTSYO </span>  removed from Favourites  
                </li>
              </ul>
            </div>
          </div>
        </div>
        `
    }
}

export default new VotingView;