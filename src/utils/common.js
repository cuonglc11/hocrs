import axios from "axios";
function postApi(img) {
    // let post = new FormData()
    // post.append("file", {
    //     uri: img.path,
    //     name: 'ccc',
    //     type: img.mime
    // });
    // console.log(post, "getFileName");
    // axios.post('http://192.168.98.112:3001/upload/', post,
    // {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    // }
    // ).then(res => {
    //     console.log(res);
    // }).catch((error) => {
    //     console.log(error.response.data, "error");
    // })
}
const common = {
    postApi
}
export default common