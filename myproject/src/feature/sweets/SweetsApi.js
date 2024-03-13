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

//get per button
export const MovePage = (page) => {
    return axios.get(`${baseUrl}?page=${page}`)
}
//get all sweets default to first page
// export const getAllSweets = () => {
//     return axios.get(`${baseUrl}?page=1`);
// }
