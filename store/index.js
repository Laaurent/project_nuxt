import axios from 'axios'
export const state = () => ({
    counter: 0,
    token: null,
    loggedIn: false
  })

  export const getters = {
      getToken: (state) => state.token,
      getLog: (state) => state.loggedIn,
  }
  
  export const mutations = {
    increment(state) {
      state.counter++
    },
    authToken(state, payload){
        state.token = payload
        state.loggedIn = true
    },
    logout(state){
        state.token = null;
        state.loggedIn = false
    }
  }


  export const actions = {
      login(context, payload){
        return new Promise((resolve, reject) => {
            axios.post(
                `http://localhost:3000/login`,
                { email: payload.email, password: payload.password })
            .then((response)=>{
                console.log('YEAH')
                context.commit('authToken',response.data)
                resolve(response)
            })
            .catch((error)=>{
                console.log('SHIT')
                reject(error)
            })
        })
    }
}