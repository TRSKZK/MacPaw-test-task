export const CONTAINER = document.querySelector(`.right-side-container`)
export const API_KEY = '652dd922-ecd2-4895-ab01-932bd6f992fb'
export const VOTING_PAGE = document.querySelector(`.voting-page`)
export const DEFAULT_PAGE = document.querySelector('.default')
export const SECTION_COVER = document.querySelector('.section-cover')


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



