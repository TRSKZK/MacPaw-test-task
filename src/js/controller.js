import BreedsView from "./breedsView.js";
import { StarterView } from "./starter-view.js";
import VotingView from './votingView.js';
import GalleryView from './galleryView.js';
import { state,getJsonVoting } from './model.js';
import votingView from "./votingView.js";


console.log(state);



function init() {
    StarterView.render()
}

init()




 function cardsFunctionality() {
    const votingCard = document.querySelector(`.voting-pg`)
    const breedsCard = document.querySelector(`.breeds-pg`)
    const galleryCard = document.querySelector(`.gallery-pg`)
    const cardContainer = document.querySelector(`.left-side-cards-container`)
    
    votingCard.addEventListener(`click`,   (e)=> {
        votingCard.classList.add(`active`)
        breedsCard.classList.remove(`active`)
        galleryCard.classList.remove(`active`)
        getJsonVoting()
        VotingView.render(state)

    })

    breedsCard.addEventListener(`click`, (e) => {
        breedsCard.classList.add(`active`)
        votingCard.classList.remove(`active`)
        galleryCard.classList.remove(`active`)
        BreedsView.render()
     

    })

    galleryCard.addEventListener(`click`, (e) => {
        galleryCard.classList.add(`active`)
        breedsCard.classList.remove(`active`)
        votingCard.classList.remove(`active`)
        GalleryView.render()
        

    })
 

}




cardsFunctionality()


function renderSection() {
    
    
}



 



