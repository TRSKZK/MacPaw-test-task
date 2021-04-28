import { getJSON, API_KEY } from "./helpers.js";



const VOTING_URL = new URL('https://api.thedogapi.com/v1/images/search');
const VOTING_POST_URL = new URL(`https://api.thedogapi.com/v1/votes`);
console.log(VOTING_POST_URL);


export const state = {
    like: [],
    favs: [],
    dislike:[]
    
}

export const getJsonVoting = async function () {
    const data = await getJSON(VOTING_URL)
    state.id = data[0].id
    state.img = data[0].url

    console.log(data[0]);
}

getJsonVoting()



export async function votingLike(state, num) {

    try {

        const body = {
            image_id: state.id,
            value: num,
            sub_id: `User-tk123`,
            
        }

        const json = JSON.stringify(body)
         const response = await fetch('https://api.thedogapi.com/v1/votes', {
            method: "POST",
            headers:{
                "x-api-key": API_KEY,
                'content-type':"application/json",
            },
            body: json
            
        })
        const result = await response.json()
        console.log(json);
        console.log(result);
        return result
        
        

    } catch (e) {
        console.error(`${e.message}`)
    }

}




