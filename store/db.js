import axios from "axios";

export const state = () => ({
  news: null
});

export const getters = {
  getNews: state => state.news
};
export const mutations = {
  mutateNews(state, payload) {
    state.news = payload.data;
  }
};
export const actions = {
  // ARTISTS
  updateArtist(context, payload) {
    axios
      .patch("http://localhost:3000/artists/2", payload)
      .then(data => console.log("changed"))
      .catch(err => console.log(err));
  },
  fetchNews(context, payload) {
    console.log("MERDE");
    axios
      .get("http://localhost:3000/news")
      .then(response => {
        console.log(response.data);
        context.commit("mutateNews", { data: response.data });
      })
      .catch(error => {
        console.error(error.response);
      });
  }
};
