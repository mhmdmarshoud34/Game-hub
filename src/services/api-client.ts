import axios from "axios";

 export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:'ae2f45b6cbff4b1db8c3f38560f1e15e'
    }
})