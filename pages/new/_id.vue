<template>
  <div class="main">
    <div class="details_card" v-if="new_item">
      <div class="details_wrapper">
        <div class="details_header">
          <div><h1>{{ new_item.title}}</h1></div>
          <div><h3>{{new_item.published}}</h3></div>
        </div>
      <div><img :src="new_item.img" alt="news_image"><p>{{ new_item.content }}</p></div>
      
      {{ new_item }}
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

<style></style>
