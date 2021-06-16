import axios from 'axios'

export const state = () => ({
    news: null
  })

  export const getters = {
    getNews: (state) => state.news

  }
  export const mutations = {
    mutateNews(state, payload){state.news = payload.data}

  }
  export const actions = {
    fetchNews(context, payload){
        console.log('MERDE')
        axios
        .get("http://localhost:3000/news")
        .then(response => {
        console.log(response.data);
        context.commit('mutateNews', {data: response.data})
        })
        .catch(error => {
        console.error(error.response);
        });
    },
    deleteNews(context, payload){
      return axios.delete(`http://localhost:3000/news/${payload}`)
      .then(response => {
        console.log("C'est bien delete !!!!!!!!!!!!")
      })
      .catch(error => {
        console.error(error.response)
      })
    }
  }