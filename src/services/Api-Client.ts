import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'21f7cca9580144fc860c8fc1250f3cb8'
    }
})