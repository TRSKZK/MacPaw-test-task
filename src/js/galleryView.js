import { View } from './starter-view.js'
import { CONTAINER } from './helpers.js'


class GalleryView extends View {
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
        
         <div class="gallery-section">
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

            <div class="section-mark">Gallery</div>
            <div class="upload btn"> 
              <svg class="upload-img">
                <use href="./src/img/icons.svg#upload">
                </use>
              </svg>
              <p>Upload</p>
        
            </div>


            
          </div>
          <form  class="gallery-form">
           <div class="upper-inputs">
             <div>
             <label for="order">order</label> <br>
              <select class="gallery-select" name='order'>
                <option>Random</option>
                <option>Asc</option>
                <option>Desc</option>
              </select>
             </div>
            
              

            <div>
              <label for="static">static</label><br>
              <select class="gallery-select" name="static" >
                <option>All</option>
                <option>Static</option>
                <option>Animated</option>
              </select>
            </div>
          </div> 
              

          <div class="low-inputs">
            <div>
              <label for="breed">breed</label><br>
              <select class="gallery-select" name="breed" >
                <option>Affenpinscher</option>
                <option>Static</option>
                <option>Animated</option>
              </select>
            </div>

            <div>
              <label for="breed">limit</label><br>
              <select class="gallery-select limit" name="limit" >
                <option>5 items per page</option>
                <option>10 items per page</option>
                <option>15 items per page</option>
              </select>
            </div>
              <div class="update-container">
                <button class="btn update-btn">
                  <img src="./src/img/update.png" alt="picture">
                </button>
              </div>
          </div>
        </form>

           


        <div class="imgs-layout-container">
          <div class="five-items-container">
            <div class="dogs-img img-1 ">
             <svg>
               <use href="./src/img/icons.svg#empty-img"></use>
             </svg>
             <div class="curtain-gal">
               <svg class="add-itm-tofav">
                 <use href="./src/img/icons.svg#heart-empty"></use>
               </svg>
             </div>
            </div>

            <div class="dogs-img img-2">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>

            <div class="dogs-img img-3">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>
            <div class="dogs-img img-4">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>
            <div class="dogs-img img-5 ">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>
          </div>
          <div class="oposite-container">
            <div class="dogs-img img-6">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>
            <div class="dogs-img img-7">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>
            <div class="dogs-img img-8">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>
            <div class="dogs-img img-9">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>
            <div class="dogs-img img-10">
              <svg>
                <use href="./src/img/icons.svg#empty-img"></use>
              </svg>
              <div class="curtain-gal">
                <svg class="add-itm-tofav">
                  <use href="./src/img/icons.svg#heart-empty"></use>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        
        `
    }
}


export default new GalleryView;