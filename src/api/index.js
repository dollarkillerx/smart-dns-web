import ajax from './axi';

let api = {
    user: {
        login: param => {
            return ajax.post('user/login', param)
        },
        register: param => {
            return ajax.post('user/register', param)
        },
        out: param => {
            return ajax.post('user/out', param)
        }
    }
}

export default {
    install: Vue => {
        Vue.api = api
        Vue.prototype.$api = api
    }
}