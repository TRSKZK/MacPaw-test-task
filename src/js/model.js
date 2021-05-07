import { getJSON, API_KEY } from "./helpers.js";



const VOTING_URL = 'https://api.thedogapi.com/v1/images/search';
const VOTING_POST_URL = `https://api.thedogapi.com/v1/`;
const GET_BREEDS_URL = `https://api.thedogapi.com/v1/breeds?`;
const BREEDS_FOR_GAllERY = `https://api.thedogapi.com/v1/images/search?`
const GET_VOTES_URL = `https://api.thedogapi.com/v1/votes?sub_id=User-tk123&limit=20&page=1`
const GET_LIKE_DISLIKE_URL = 'https://api.thedogapi.com/v1/images/'


export const state = {
    
}

export const getJsonVoting = async function () {
    const data = await getJSON(VOTING_URL)
    state.id = data[0].id
    state.img = data[0].url
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
        console.log(state.id);

        const json = JSON.stringify(body)
        console.log(state.id);
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


export async function getBreeds(breed, limit=5, page) {
    
    try {
        const request = await getJSON(GET_BREEDS_URL+`attach_breed=${breed}&limit=${limit}&page=${page}`);
        return request
        // `${GET_BREEDS_URL+'attach_breed='+breed+'&'+'limit='+limit+'&'+'page='+page }`
    } catch (e) {
        console.error(`${e.message} 💥💥💥`)
}
}




export async function getBreedsFotGallery(limit= 5, mime_types=`all`, order=`random`) {
    try {
        const request = await getJSON(BREEDS_FOR_GAllERY+`mime_types=${mime_types}&order=${order}&limit=${limit}`)

       return request
    } catch (e) {
        console.error(`${e.message}`)
    }
}



export async function getVotesImageIds(a) {
    try {
        let liked = []
        let dislike = []
        const data = await getJSON(GET_VOTES_URL)
       
        
        data.forEach(el=> {
          el.value === 1 ? liked.push(el) : dislike.push(el)
        })

        console.log(liked);


        let likedUrls = []
        let dislikedUrls = []
        
        for (let breed of liked) {
             const res = await getJSON(GET_LIKE_DISLIKE_URL+`${breed.image_id}`)
             likedUrls.push(res.url) 
        }

        for (let breed of dislike) {
            const res = await getJSON(GET_LIKE_DISLIKE_URL+`${breed.image_id}`)
            dislikedUrls.push(res.url) 
       }

        // console.log(likedUrls);
        // console.log(dislikedUrls);

        if (a > 0) return likedUrls
        else return dislikedUrls

        
        

        // urls.forEach(res => console.log(res.url))
    } catch (e) {
        console.error(`${e.message}💥💥💥`)
    }
    
}


export async function searchBreedByName(name) {
    try {
        const response = await getJSON(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        const urlResponse = await getJSON(GET_LIKE_DISLIKE_URL+`${response[0].reference_image_id}`)
        

        let result = {
            name: response[0].name,
           url: urlResponse.url
        }
        console.log(response);
        
        return result
    } catch (e) {
        console.error(`${e.message}💥💥💥`)
    }
    
}










