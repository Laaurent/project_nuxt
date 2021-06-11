<template>
  <div class="main">
    <div class="details_card" v-if="news">
      <NewCardComponent
        v-for="(item, index) in news"
        :key="index"
        :new_item="item"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NewCardComponent from "../components/NewCardComponent.vue";
export default {
  data() {
    return {
      news: undefined
    };
  },
  name: "newsComponent",
  components: {
    NewCardComponent
  },
  mounted() {
    axios
      .get(`http://localhost:3000/news`)
      .then(response => {
        this.news = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style></style>
