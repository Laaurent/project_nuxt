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
import axios from "axios";
export default {
  data() {
    return {
      news: [
        {
          title: "Lorem",
          published: "12/09/2020",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "test"
        }
      ],
      index: 0
    };
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      axios
        .get("http://localhost:3000/news")
        .then(response => {
          console.log(response.data);
          this.news = response.data;
        })
        .catch(error => {
          console.error(error.response);
        });
    },
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
