import axios from "axios";

const clienteAxios = axios.create({
    //base va a ser la ulr base
    baseURL:`http://localhost:4000`
})

export default clienteAxios