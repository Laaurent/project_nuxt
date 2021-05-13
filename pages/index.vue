<template>
  <div>
    <FirstFrameComponent :news="last_news" v-if="last_news" />
    <SecondFrameComponent :news="news" v-if="news"/>
  </div>
</template>

<script>
import FirstFrameComponent from "../components/showcase/FirstFrameComponent.vue";
import SecondFrameComponent from "../components/showcase/SecondFrameComponent.vue";
import {mapGetters, mapActions} from 'vuex';
export default {
  components: { FirstFrameComponent, SecondFrameComponent },
  data() {
    return {
      // news: [
      //   {
      //     title: "Lorem",
      //     published: "12/09/2020",
      //     content:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      //     img: "test"
      //   }
      // ]
      // news: null,
      last_news: null
    };
  },
  async mounted() {
    await this.fetchNews();
    // ...mapActions(['db/fetchNews'])
  },
  computed: {
    // test(){
    //   this.news = ...mapGetters('db',['getNews'])
    // }
    ...mapGetters('db',{news:'getNews'}),
    // getNews: {
    //   get(){
    //     return this.news
    //   },
    //   set(news){
    //     return news
    //   }
    // }
  },
  watch: {
    news: () => {
      // let array_tmp;
      // array_tmp = this.news
      //   .sort((a, b) => new Date(a.published) - new Date(b.published))
      //   .slice(0, 3);
      // this.last_news =  array_tmp;
      console.log('dazdazdazdazd')
    }
  },
  methods: {
    ...mapActions('db',['fetchNews']),
    // async fetchNews() {
    //   await this.$store.dispatch('db/fetchNews')
    // },

    getNews(side) {
      if (side == "left") {
        this.index = this.index == 0 ? this.news.length - 1 : this.index - 1;
      }
      if (side == "right") {
        this.index = this.index == this.news.length - 1 ? 0 : this.index + 1;
      }
    }
  }
};
</script>

<style></style>
