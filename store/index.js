import axios from 'axios'
export const state = () => ({
    counter: 0,
    token: null,
    email: null,
    loggedIn: false,
})

export const getters = {
    getToken: (state) => state.token,
    getLog: (state) => state.loggedIn,
    getEmail: (state) => state.email,
}

export const mutations = {
    increment(state) {
        state.counter++
    },
    authToken(state, payload) {
        state.token = payload.token.accessToken
        state.email = payload.email
        state.loggedIn = true
    },
    logout(state) {
        state.token = null;
        state.loggedIn = false
    }
}


export const actions = {
    login(context, payload) {
        return new Promise((resolve, reject) => {
            axios.post(
                `http://localhost:3000/login`,
                { email: payload.email, password: payload.password })
                .then((response) => {
                    console.log('YEAH')
                    context.commit('authToken', { token: response.data, email: payload.email })
                    resolve(response)
                })
                .catch((error) => {
                    console.log('SHIT')
                    reject(error)
                })
        })
    },
    like(context, payload) {
        console.log(payload)
        return new Promise((resolve, reject) => {
            axios.patch(
                `http://localhost:3000/artists/${payload.id}`,
                { likes: payload.likes })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
}