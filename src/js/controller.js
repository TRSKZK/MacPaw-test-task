import BreedsView from "./breedsView.js";
import VotingView from './votingView.js';
import GalleryView from './galleryView.js';
import { state, getJsonVoting,voting, getBreeds, getBreedsFotGallery } from './model.js';
import {
    CONTAINER, styleFetchImg, votingVisible, breedsVisible,
    galleryVisible, galleryCard, breedsCard, votingCard, votingCardActive,
    breedsCardActive, galleryCardActive,SECTION_COVER
} from './helpers.js'
import galleryView from "./galleryView.js";




 function cardsFunctionality() {
    votingCard.addEventListener(`click`,   (e)=> {
        votingCardActive()
        votingVisible()
        getJsonVoting()
        console.log(state);
        styleFetchImg(SECTION_COVER, state.img)
    })
     
     
    breedsCard.addEventListener(`click`, (e) => {
        breedsCardActive()
        breedsVisible()
        BreedsView.addBreedsOptions(getBreeds(10,setBreedsLimit(),1))
    })

    galleryCard.addEventListener(`click`, (e) => {
       galleryCardActive()
        galleryVisible()
        galleryView.clear()
        GalleryView.addbreedsGallery(getBreedsFotGallery())
        
    })
 

}

cardsFunctionality()


const form = document.querySelector(`.gallery-form`)


let body = {}
function getdataFromForm() {
    form.addEventListener(`input`, (e) => {
        e.preventDefault()
        
        let orderEl = document.getElementById(`order`).value
        let mime_typesEl = document.getElementById(`mime_types`).value
        let imgs_quantityEl = document.getElementById(`imgs-quantity`).value
        
        
        body.order= orderEl,
        body.mime_type=mime_typesEl,
        body.imgs_quantity=imgs_quantityEl  
        
    })
}

getdataFromForm()

function galleryRefresh(){
    const submit = document.getElementById(`submit`)
    submit.addEventListener(`click`, (e) => {
            
        e.preventDefault()
        GalleryView.clear();
        GalleryView.addbreedsGallery(getBreedsFotGallery(body.imgs_quantity, body.mime_type, body.order));
        body ={}
    })

}
galleryRefresh()

console.log(body);




function setBreedsLimit() {
    const limitEL = document.getElementById(`limit`)
    limitEL.addEventListener(`input`, () => {
        BreedsView.addBreedsOptions(getBreeds(10, limitEL.value ,1))
    })
    
 }
    

    


function votinFunctionality() {

    CONTAINER.addEventListener("click", (e) => {
        const votes = `votes`;
        const favs = `favourites`;
        styleFetchImg(SECTION_COVER, state.img)
        
        if (e.target.classList.contains(`add`)) {
            voting(state, 1, votes)
            VotingView.generateLikeLog(state)
            getJsonVoting()
            
            
        }
        
        if (e.target.classList.contains(`fav`)) {
            voting(state, '',favs)
            VotingView.generateFavLog(state)
            getJsonVoting()
            
            console.log('fav');
        }
            
        
        if (e.target.classList.contains(`dislike`)) {
            voting(state, 0, votes)
            VotingView.generateDislikeLog(state)
            getJsonVoting()
            
                
        }
            
    })
    
    
}

votinFunctionality()



// const getVotes = async function () {
//     const request = await getJSON(" https://api.thedogapi.com/v1/votes")
    
//     console.log(request);
// }

// getVotes()
 

