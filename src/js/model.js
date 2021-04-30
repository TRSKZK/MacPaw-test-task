import { getJSON, API_KEY } from "./helpers.js";



const VOTING_URL = 'https://api.thedogapi.com/v1/images/search';
const VOTING_POST_URL = `https://api.thedogapi.com/v1/`;
const GET_BREEDS_URL = `https://api.thedogapi.com/v1/breeds?`;



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



export async function voting(state, num, votes) {

    try {

        const body = {
            image_id: state.id,
            sub_id: `User-tk123`,
            valueCheck() {
               return num === '' ? '' : this.value = num;
            },
            
        }
        body.valueCheck()
        

        const json = JSON.stringify(body)
         const response = await fetch(`${VOTING_POST_URL + votes}`, {
            method: "POST",
            headers:{
                "x-api-key": API_KEY,
                'content-type':"application/json",
            },
            body: json
            
        })
        const result = await response.json()
        console.log(result);
        return result
    } catch (e) {
        console.error(`${e.message}`)
    }

}


export async function getBreeds(breed, limit, page) {
    
    try {
        const request = await getJSON(`${GET_BREEDS_URL+'attach_breed='+breed+'&'+'limit='+limit+'&'+'page='+page }`);
        console.log(request);

        return request
        
    } catch (e) {
        console.error(`${e.message} 💥💥💥`)
}
}

// getBreeds(10, 10,1)






