<template>
  <div v-if="news">
    <FirstFrameComponent :news="news"/>
    <SecondFrameComponent :news="news" />
  </div>
</template>

<script>
import FirstFrameComponent from "../components/showcase/FirstFrameComponent.vue";
import SecondFrameComponent from "../components/showcase/SecondFrameComponent.vue";
import {mapGetters, mapActions} from 'vuex';
import axios from 'axios'
export default {
  components: { FirstFrameComponent, SecondFrameComponent },
  data() {
    return {
      news: null
    };
  },
  created() {
    // this.fetchNews();
    axios
        .get("http://localhost:3000/news")
        .then(response => {
        console.log(response.data);
        this.news = response.data
        })
        .catch(error => {
        console.error(error.response);
        });
  },
  computed: {
    // news(){
    //   return this.$store.getters['db/getNews']
    // }
  },
  methods: {
    // ...mapActions('db',['fetchNews']),
    //  fetchNews(context, payload){
    //     console.log('MERDE')
    //     axios
    //     .get("http://localhost:3000/news")
    //     .then(response => {
    //     console.log(response.data);
    //     this.news = response.data
    //     })
    //     .catch(error => {
    //     console.error(error.response);
    //     });
    // }
  }
};
</script>

<style></style>
