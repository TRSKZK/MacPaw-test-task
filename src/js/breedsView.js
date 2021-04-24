import { View } from './starter-view.js';
import { CONTAINER } from './helpers.js';
  

class BreedsView extends View {
    constructor() {
        super()
    }
    render() {
        const markup = this.generateMarkUp()
        CONTAINER.innerHTML = ""
        CONTAINER.insertAdjacentHTML('afterbegin', markup)
    }
    
    generateMarkUp() {
        return `
        <div class="breeds-page">
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

              <div class="section-mark">breeds</div>

              <select name="select-breeds" id="breeds-selection">
                 <option default value="All breeds">All breeds</option>
                 <option value="Affenpinscher">Affenpinscher</option>
                 <option value="Afghan Hound">Afghan Hound</option>
              </select>

              <select name="limit" id="limit">
                <option value="5">Limit:5</option>
               <option default value="10">Limit:10</option>
               <option value="15">Limit:15</option>
               <option value="20">Limit:20</option>
              </select>
              <div class="sort up">
                <svg class="sort-img">
                  <use href="./src/img/icons.svg#sort-up">
                  </use>
                </svg>
              </div>
              <div class="sort down">
                <svg class="sort-img">
                  <use href="./src/img/icons.svg#sort-down">
                  </use>
                </svg>
              </div>
            </div>
            <div class="imgs-layout-container">
              <div class="five-items-container">
              <div class="dogs-img img-1">
                <svg>
                  <use href="./src/img/icons.svg#empty-img"></use>
                </svg>
                <div class="curtain">
                  dobermann
                </div>
              </div>
              <div class="dogs-img img-2">
                
                <img class="dogs-picture" src="./src/img/image-test.png" alt="picture">
                <div class="curtain">
                 dobermann
                </div>

               </div>
              <div class="dogs-img img-3" >
                <img class="dogs-picture" src="./src/img/image-test.png" alt="picture">
                <div class="curtain">
                  dobermann
                </div>
              </div>
              <div class="dogs-img img-4">
                <svg>
                  <use href="./src/img/icons.svg#empty-img"></use>
                </svg>
                <div class="curtain">
                  dobermann
                </div>
              </div>
              <div class="dogs-img img-5">
                <svg>
                  <use href="./src/img/icons.svg#empty-img"></use>
                </svg>
                <div class="curtain">
                  dobermann
                </div>
              </div>
             </div>



              <div class="oposite-container">
                <div class="dogs-img img-6">
                  <svg>
                    <use href="./src/img/icons.svg#empty-img"></use>
                  </svg>
                  <div class="curtain">
                    dobermann
                  </div>
                </div>
                <div class="dogs-img img-7">
                  <svg>
                    <use href="./src/img/icons.svg#empty-img"></use>
                  </svg>
                  <div class="curtain">
                    dobermann
                  </div>
                </div>
                <div class="dogs-img img-8">
                  <svg>
                    <use href="./src/img/icons.svg#empty-img"></use>
                  </svg>
                  <div class="curtain">
                    dobermann
                  </div>
                </div>
                <div class="dogs-img img-9">
                  <svg>
                    <use href="./src/img/icons.svg#empty-img"></use>
                  </svg>
                  <div class="curtain">
                    dobermann
                  </div>
                </div>
                <div class="dogs-img img-10">
                  <svg>
                    <use href="./src/img/icons.svg#empty-img"></use>
                  </svg>
                  <div class="curtain">
                    dobermann
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `
    }



}

export default new BreedsView
