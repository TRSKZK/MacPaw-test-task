export const CONTAINER = document.querySelector(`.right-side-container`)
export const API_KEY = '652dd922-ecd2-4895-ab01-932bd6f992fb'
export const SECTION_COVER = document.querySelector('.section-cover')

const VOTING_PAGE = document.querySelector(`.voting-page`)
const DEFAULT_PAGE = document.querySelector('.default')
const BREEDS_PAGE = document.querySelector(`.breeds-page`)
const GALLERY_PAGE = document.querySelector(`.gallery-section`)


export const getJSON = async function (url) {
    try {
        const result = await fetch(url, {
            headers: {
                "x-api-key":API_KEY
            }
        })
        const data = await result.json()
        
        
     return data
    } catch (e) {
        console.error(e.message);
    }
}


export const styleFetchImg = function (img) {
    return (
        SECTION_COVER.style.cssText = `background: url(${img}); margin-top: 20px;
        border-radius: 20px;
        width: 640px;
        height: 360px;
        background-origin:content-box ;
        background-repeat: no-repeat;
        background-size: cover;`

    )
}


export function votingVisible() {
    DEFAULT_PAGE.classList.add('visibility')
    BREEDS_PAGE.classList.add(`visibility`)
    GALLERY_PAGE.classList.add(`visibility`)
    VOTING_PAGE.classList.remove(`visibility`)
}

export function breedsVisible() {
        DEFAULT_PAGE.classList.add('visibility')
    VOTING_PAGE.classList.add(`visibility`)
    GALLERY_PAGE.classList.add(`visibility`)
        BREEDS_PAGE.classList.remove(`visibility`)
}


export function galleryVisible() {
    DEFAULT_PAGE.classList.add('visibility')
    BREEDS_PAGE.classList.add(`visibility`)
    VOTING_PAGE.classList.add(`visibility`)
    GALLERY_PAGE.classList.remove(`visibility`)
}

