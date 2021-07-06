import axios from 'axios'

axios.defaults.baseURL="http://3.141.201.244:3000"

export default{
    login(id, password){
        return axios({
            method:'post',
            url:'/auth/login',
            data: {
                id: id,
                password: password
            }
        })
    },

    register(id, password, name){
        return axios({
            method: 'post',
            url: '/auth/register',
            data: {
                id:id,
                password: password,
                name: name
            }
        })
        .then(res => {
            console.log(res);
        })
    },

    post(title, content){
        return axios({
            method: 'post',
            url: '/post',
            data: {
                title: title,
                content: content,
                token: window.sessionStorage.getItem('userToken')
            }
        })
        .then(res => {
            console.log(res.status);
        })
    },

    postList(){
        return axios({
            method: 'get',
            url: '/post/'+window.sessionStorage.getItem('userToken')
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err);
        })
    }
}