import BreedsView from "./breedsView.js";
import VotingView from './votingView.js';
import GalleryView from './galleryView.js';
import { state, getJsonVoting,voting, getBreeds, getBreedsFotGallery, getVotesImageIds,searchBreedByName } from './model.js';
import {
    CONTAINER, styleFetchImg, votingVisible, breedsVisible,
    galleryVisible, galleryCard, breedsCard, votingCard, votingCardActive,
    breedsCardActive, galleryCardActive,SECTION_COVER, resultPageVisible,backToDefault
} from './helpers.js'
import galleryView from "./galleryView.js";
import LikedImgs from './likedImgs.js'
import likedImgs from "./likedImgs.js";


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



async function showVotedImgs() {
    try {
        const [...likedImgsButton] = document.querySelectorAll(`.show-likes`)
        const [...dislikeImgsButton] = document.querySelectorAll(`.show-dislike`)
        likedImgsButton.forEach(async function(btn){ btn.addEventListener(`click`, async function() {
           
            resultPageVisible()
            likedImgs.renderSpinner()
            await LikedImgs.renderLikedImgs(getVotesImageIds(1), `likes`)
        })
    })
    
        dislikeImgsButton.forEach(async function(btn){ btn.addEventListener(`click`, async function() {
            
            resultPageVisible()
            likedImgs.renderSpinner()
            await LikedImgs.renderLikedImgs(getVotesImageIds(0), `dislikes`)
        })
})


    } catch (e) {
        console.error(`${e.message}`)
    }
    

}
showVotedImgs()


 function searchFunctionality() {
    const [...form] = document.querySelectorAll(`.search`)
    let breedsSearch = document.querySelector(`.breeds-search`)
    let votesSearch = document.querySelector(`.votes-search`)
    let gallerySearch = document.querySelector(`.gallery-search`)
    let selectedSearch = document.querySelector(`.selected-search`)
    let resultSearch = document.querySelector(`.result-search`)
    let searcField = document.querySelectorAll(`.search-field`)
    let count = 0
    form.forEach(el => el.addEventListener(`submit`, (e) => {
        e.preventDefault()
        
        
        let formData = breedsSearch.value || votesSearch.value ||
            gallerySearch.value || selectedSearch.value || resultSearch.value;
        
        resultSearch.value = ' '
        breedsSearch.value = ' '
        votesSearch.value = ' '
        gallerySearch.value = ''
        selectedSearch.value = ` `
        searcField.forEach(el => el.value = ``)

        
       count+=1
            

        
        likedImgs.renderSearchImgs(searchBreedByName(formData), `search`, count)
        resultPageVisible()
    
        
    }))

    

}
searchFunctionality()



function pressbackButton() {
    const [...backBtn] = document.querySelectorAll(`.back-btn`)
    backBtn.forEach(btn => btn.addEventListener(`click`, backToDefault))
}
 

pressbackButton()