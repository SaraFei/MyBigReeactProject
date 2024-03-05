import axios from "axios"
let baseUrl = "http://localhost:4500/api/sweets"

export const getAllSweets = () => {
    return axios.get(baseUrl);
}

export const getSweetById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}
export const getQtyOfSweets = () => {
    return axios.get("http://localhost:4500/api/sweetsQty");
}
