import { getJSON } from "./helpers.js";



const VOTING_URL = 'https://api.thedogapi.com/v1/images/search';
export const state = {
    
}

export const getJsonVoting = async function () {
    const data = await getJSON(VOTING_URL)
    state.id = data[0].id
    state.img = data[0].url

    console.log(data[0]);
}

getJsonVoting()


