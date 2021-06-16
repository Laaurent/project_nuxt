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
  }
};
</script>

<style scoped lang="scss">
</style>
