import BreedsView from "./breedsView.js";
import VotingView from './votingView.js';
import GalleryView from './galleryView.js';
import { state, getJsonVoting,voting, getBreeds, getBreedsFotGallery, getVotesImageIds,getVotedImgsUrl } from './model.js';
import {
    CONTAINER, styleFetchImg, votingVisible, breedsVisible,
    galleryVisible, galleryCard, breedsCard, votingCard, votingCardActive,
    breedsCardActive, galleryCardActive,SECTION_COVER
} from './helpers.js'
import galleryView from "./galleryView.js";
import LikedImgs from './likedImgs.js'
import likedImgs from "./likedImgs.js";

// async function test() {
//     const liked = await getVotesImageIds(0)
//     console.log(liked);
// }
// test()
 

// LikedImgs.renderLikedImgs(getVotesImageIds(1))

console.log(LikedImgs);

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


let formData = {}
function getdataFromForm() {
    form.addEventListener(`input`, (e) => {
        e.preventDefault()
        
        let orderEl = document.getElementById(`order`).value
        let mime_typesEl = document.getElementById(`mime_types`).value
        let imgs_quantityEl = document.getElementById(`imgs-quantity`).value
        
        
        formData.order= orderEl,
        formData.mime_type=mime_typesEl,
        formData.imgs_quantity=imgs_quantityEl  
        
    })
}

getdataFromForm()

function galleryRefresh(){
    const submit = document.getElementById(`submit`)
    submit.addEventListener(`click`, (e) => {
            
        e.preventDefault()
        GalleryView.clear();
        GalleryView.addbreedsGallery(getBreedsFotGallery(formData.imgs_quantity, formData.mime_type, formData.order));
        formData ={}
    })

}
galleryRefresh()

console.log(formData);




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
            
            
        }
            
        
        if (e.target.classList.contains(`dislike`)) {
            voting(state, 0, votes)
            VotingView.generateDislikeLog(state)
            getJsonVoting()
            
                
        }
            
    })
    
    
}

votinFunctionality()



function showVotedImgs() {
    const likedImgsButton = document.querySelector(`.show-likes`)
    const dislikeImgsButton = document.querySelector(`.show-dislike`)
    likedImgsButton.addEventListener(`click`, () => {
        likedImgs.clear()
        LikedImgs.renderLikedImgs(getVotesImageIds(1))
    })

    
    dislikeImgsButton.addEventListener(`click`, () => {
        likedImgs.clear()
        LikedImgs.renderLikedImgs(getVotesImageIds(0))
   })


}
showVotedImgs()

// const getVotes = async function () {
//     const request = await getJSON(" https://api.thedogapi.com/v1/votes")
    
//     console.log(request);
// }

// getVotes()
 

