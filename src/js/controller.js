import BreedsView from "./breedsView.js";
import { StarterView } from "./starter-view.js";
import VotingView from './votingView.js';
import GalleryView from './galleryView.js';
import { state, getJsonVoting,votingLike } from './model.js';
import {CONTAINER,VOTING_PAGE,DEFAULT_PAGE, styleFetchImg} from './helpers.js'




 function cardsFunctionality() {
    const votingCard = document.querySelector(`.voting-pg`)
    const breedsCard = document.querySelector(`.breeds-pg`)
    const galleryCard = document.querySelector(`.gallery-pg`)
     const cardContainer = document.querySelector(`.left-side-cards-container`)
     
     
    
    votingCard.addEventListener(`click`,   (e)=> {
        votingCard.classList.add(`active`)
        breedsCard.classList.remove(`active`)
        galleryCard.classList.remove(`active`)
        DEFAULT_PAGE.classList.add('visibility')
        VOTING_PAGE.classList.remove(`visibility`)
        getJsonVoting()
        styleFetchImg(state.img)
        
        
        

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


function votinFunctionality() {

    CONTAINER.addEventListener("click", (e) => {
        const votes = `votes`;
        const favs = `favourites`;
        if (e.target.classList.contains(`add`)) {
            votingLike(state, 1, votes)
            VotingView.generateLikeLog(state)
            
        }
              
        
        if (e.target.classList.contains(`fav`)) {
            votingLike(state, '',favs)
            VotingView.generateFavLog(state)
            console.log('fav');
        }
            
        
        if (e.target.classList.contains(`dislike`)) {
            votingLike(state, 0, votes)
            VotingView.generateDislikeLog(state)
                
        }
            
    })
    
    
}

votinFunctionality()





// const getVotes = async function () {
//     const request = await getJSON(" https://api.thedogapi.com/v1/votes")
    
//     console.log(request);
// }

// getVotes()
 

