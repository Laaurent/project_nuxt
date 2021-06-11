<template>
  <div class="main">
    <div class="details_card" v-if="new_item">
      {{ new_item }}
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
