export const CONTAINER = document.querySelector(`.right-side-container`)
export const API_KEY = '652dd922-ecd2-4895-ab01-932bd6f992fb'
export const SECTION_COVER = document.querySelector('.section-cover')
export const votingCard = document.querySelector(`.voting-pg`)
export const breedsCard = document.querySelector(`.breeds-pg`)
export const galleryCard = document.querySelector(`.gallery-pg`)

const VOTING_PAGE = document.querySelector(`.voting-page`)
const DEFAULT_PAGE = document.querySelector('.default')
const BREEDS_PAGE = document.querySelector(`.breeds-page`)
const GALLERY_PAGE = document.querySelector(`.gallery-section`)
const BREEDS_SELECTED = document.querySelector(`.breeds-selected`)


export const getJSON = async function (url) {
    try {
        const result = await fetch(url, {
            headers: {
                "x-api-key":API_KEY
            }
        })
        if (!result.ok) throw new Error(alert(`Something went wrong!💥💥💥`))
        
        const data = await result.json()
        
        
     return data
    } catch (e) {
        console.error(e.message);
    }
}


export const styleFetchImg = function (el,img) {
    return (
        el.style.cssText = `background: url(${img}); margin-top: 20px;
        border-radius: 20px;
        width: 640px;
        height: 360px;
        background-origin:content-box;
        background-repeat: no-repeat;
        background-size: cover;`
    )
}

export function styleForCards(el,img) {
    return (
        el.style.cssText = `background: url(${img});
        background-origin:content-box;
        background-repeat: no-repeat;
        background-size: cover;

        `
    )
    
}


export function votingVisible() {
    DEFAULT_PAGE.classList.add('visibility')
    BREEDS_PAGE.classList.add(`visibility`)
    GALLERY_PAGE.classList.add(`visibility`)
    BREEDS_SELECTED.classList.add(`visibility`)
    VOTING_PAGE.classList.remove(`visibility`)
}

export function breedsVisible() {
        DEFAULT_PAGE.classList.add('visibility')
    VOTING_PAGE.classList.add(`visibility`)
    GALLERY_PAGE.classList.add(`visibility`)
    BREEDS_SELECTED.classList.add(`visibility`)
        BREEDS_PAGE.classList.remove(`visibility`)
}


export function galleryVisible() {
    DEFAULT_PAGE.classList.add('visibility')
    BREEDS_PAGE.classList.add(`visibility`)
    VOTING_PAGE.classList.add(`visibility`)
    BREEDS_SELECTED.classList.add(`visibility`)
    GALLERY_PAGE.classList.remove(`visibility`)
}


export function votingCardActive() {
    votingCard.classList.add(`active`)
        breedsCard.classList.remove(`active`)
        galleryCard.classList.remove(`active`)
}

export function breedsCardActive(){
    breedsCard.classList.add(`active`)
        votingCard.classList.remove(`active`)
        galleryCard.classList.remove(`active`)
}

export function galleryCardActive() {
    galleryCard.classList.add(`active`)
    breedsCard.classList.remove(`active`)
    votingCard.classList.remove(`active`)
}

export function showSelectedBreed() {
    DEFAULT_PAGE.classList.add('visibility')
    BREEDS_PAGE.classList.add(`visibility`)
    VOTING_PAGE.classList.add(`visibility`)
    GALLERY_PAGE.classList.add(`visibility`)

}


export function selectedBreedRender({img, name, temperament,weight, height, life_span, id}) {
    const legend = document.getElementById(`legend`)
    const temperCont = document.getElementById(`temperament`)
    const weightCont = document.getElementById(`weight-cont`)
    const heightCont = document.getElementById(`height-cont`)
    const lifeSpan = document.getElementById(`life-span`)
    const breedID = document.getElementById(`breed-id`)
    
    
    legend.innerText = name
    temperCont.innerText = temperament
    weightCont.innerText = weight.metric
    heightCont.innerText = height.metric
    lifeSpan.innerText = life_span
    breedID.innerText = id
}


    
