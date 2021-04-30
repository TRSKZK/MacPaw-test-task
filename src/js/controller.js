import BreedsView from "./breedsView.js";
import VotingView from './votingView.js';
import GalleryView from './galleryView.js';
import { state, getJsonVoting,voting, getBreeds } from './model.js';
import {
    CONTAINER, styleFetchImg, votingVisible, breedsVisible,
    galleryVisible, galleryCard, breedsCard, votingCard, votingCardActive,
    breedsCardActive, galleryCardActive
} from './helpers.js'




 function cardsFunctionality() {
    votingCard.addEventListener(`click`,   (e)=> {
        votingCardActive()
        votingVisible()
        getJsonVoting()
        styleFetchImg(state.img)
    })
     
     
    breedsCard.addEventListener(`click`, (e) => {
        breedsCardActive()
        breedsVisible()
        BreedsView.addBreedsOptions(getBreeds(10,setBreedsLimit(),1))
    })

    galleryCard.addEventListener(`click`, (e) => {
       galleryCardActive()
        galleryVisible()
    })
 

}

cardsFunctionality()


function setBreedsLimit() {
    let limitVal = 5;
    const limitEL = document.getElementById(`limit`)
    limitEL.addEventListener(`input`, () => {
       limitVal = limitEL.value
        console.log(limitVal);
        BreedsView.addBreedsOptions(getBreeds(10,limitVal,1))
    })
    return limitVal
    }
    

    


function votinFunctionality() {

    CONTAINER.addEventListener("click", (e) => {
        const votes = `votes`;
        const favs = `favourites`;

        if (e.target.classList.contains(`add`)) {
            voting(state, 1, votes)
            VotingView.generateLikeLog(state)
            getJsonVoting()
            styleFetchImg(state.img)
            
        }
        
        if (e.target.classList.contains(`fav`)) {
            voting(state, '',favs)
            VotingView.generateFavLog(state)
            getJsonVoting()
            styleFetchImg(state.img)
            console.log('fav');
        }
            
        
        if (e.target.classList.contains(`dislike`)) {
            voting(state, 0, votes)
            VotingView.generateDislikeLog(state)
            getJsonVoting()
            styleFetchImg(state.img)
                
        }
            
    })
    
    
}

votinFunctionality()




// const getVotes = async function () {
//     const request = await getJSON(" https://api.thedogapi.com/v1/votes")
    
//     console.log(request);
// }

// getVotes()
 

