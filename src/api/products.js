
import axios from "axios";

const getProduct = () => {
    return axios.get("https://qa-registry-interview-api.regsvcs.theknot.com/products");
}


export default getProduct;