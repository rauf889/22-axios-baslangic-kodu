import axios from "axios"

const instance = axios.create({
    baseURL: "https://vuejs-axios-blog-ecb47-default-rtdb.firebaseio.com",

}) 


// instance.defaults.headers.common[""]

export default instance;