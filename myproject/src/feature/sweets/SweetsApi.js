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
//for manager only! delete product
export const DeleteProductFromServer = (prodId, token) => {
    return axios.delete(`${baseUrl}/${prodId}`, { headers: {"a-access-token" :token} })
}
//for manager only! add sweet
export const AddSweetToSever=(sweet,token)=>{
    return axios.post(baseUrl, { headers: {"a-access-token" :token}, sweet})
}
//get all sweets default to first page
// export const getAllSweets = () => {
//     return axios.get(`${baseUrl}?page=1`);
// }
