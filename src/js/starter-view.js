
import {CONTAINER} from './helpers.js'

 class View {
    
   
    render() {
        const markup = this.generateMarkUp()
        CONTAINER.innerHTML = ""
        CONTAINER.insertAdjacentHTML('afterbegin', markup)
    }

    generateMarkUp() {
        return `
        <div class="default">
          <div class="right-side-container-background"></div>
          <img
            class="girl-pet"
            src="./src/img/girl-and-pet.png"
            alt="picture"
          />
        </div>
    `
 }

}

const StarterView = new View()
export  {StarterView, View}


