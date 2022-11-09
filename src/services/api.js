import axios from 'axios'

const BASE_URL = "http://localhost:3000"
// const BASE_URL = "https://fakestoreapi.com"

const getProducts = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
}

export {getProducts};
