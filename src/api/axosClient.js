import axios from "axios";
import query from 'query-string'
const axiosClien  = axios.create({
    baseURL : 'https://629d815ac6ef9335c09eaf1b.mockapi.io/',
    headers  :  {
        'content-type' :'application/json'
    },
    paramsSerializer :  params => query.stringify(params)
});
axiosClien.interceptors.request.use(async (config) => {
    return config
})
axiosClien.interceptors.response.use((response) => {
    if(response && response.data) {
        return response.data
    }
     return response
},(erro)=> {
    throw erro
})
export default axiosClien