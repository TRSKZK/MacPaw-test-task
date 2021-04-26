export const CONTAINER = document.querySelector(`.right-side-container`)
export const API_KEY = '652dd922-ecd2-4895-ab01-932bd6f992fb'



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




