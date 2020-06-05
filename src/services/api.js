import axios from 'axios';

const baseUrl = 'https://opentable.herokuapp.com/api/restaurants';



const getRestaurants = async(searchTerm) => {

    const params = {
        query: `?city=${searchTerm}`
    };
    try {
        const response  = await axios.get(baseUrl+params.query);
        return response.data

    } catch(e) {
        console.log('Unable to complete request', e)

    }


};

export default getRestaurants;