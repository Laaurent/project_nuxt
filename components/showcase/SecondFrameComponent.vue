<template>
  <div class="second_frame">
    <div class="wrapper_second_frame">
      <div
        class="img"
        :style="
          'background-image : url(' +
            news[index].img +
            '), linear-gradient(#fefff8 50%, #140c3d) '
        "
      >
        <div class="button_swipe_div">
          <button class="button_swipe" @click="getNews('left')">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button class="button_swipe" @click="getNews('right')">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div class="text">
        <div>
          <h2>{{ news[index].title }}</h2>
          <p class="secondary">
            <i class="far fa-calendar-alt"></i> {{ news[index].published }}
          </p>
          <p>
            {{ news[index].content }}
          </p>
        </div>
        <button class="button_icon">
          En savoir plus <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
  data() {
    return {
      index: 0
    };
  },
  methods: {
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
