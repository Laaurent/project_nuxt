<template>
  <div class="main">
    <div class="details_news_card" v-if="new_item">
      <div class="details_news_wrapper">
        <div>
          <img :src="new_item.img" alt="news_image">
        </div>
        <div class="article_wrapper">
          <h1>{{ new_item.title}}</h1>
          <p id="content">{{ new_item.content }}</p>
          <p id="published">{{new_item.published}}</p>
          <div class="news_button">
          <button>
            j'aime
            <i class="far fa-heart"></i>
          </button>
          <button class="" @click="deleteNews($nuxt.$route.params.id)">
            Delete <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        </div>
         
    </div>
   
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      new_item: undefined
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/news?id=${this.$nuxt.$route.params.id}`)
      .then(response => {
        this.new_item = response.data[0];
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    async deleteNews(id){
      // return new Promise((resolve, reject) => {
      //   let truc = this.$store.dispatch('db/deleteNews',id);
      //   console.log(truc)
      //   if (truc) {
      //     resolve(res => this.$router.push('/news'))
      //   }
      // })
      await this.$store.dispatch('db/deleteNews',id);
      this.$router.push('/news');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
