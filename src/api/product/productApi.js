import axiosClien from "../axosClient"

const productApi = {
    getAll: (params) => {
        const url = 'user'
        return axiosClien.get(url, { params })
    },
    DetalProduct :  (id) => {
        const url = `url/${id}`
        return axiosClien.get(url)
    }
}
export default productApi