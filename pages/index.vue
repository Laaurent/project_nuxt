<template>
  <div>
    <FirstFrameComponent :news="last_news" />
    <SecondFrameComponent :news="news" />
  </div>
</template>

<script>
import FirstFrameComponent from "../components/showcase/FirstFrameComponent.vue";
import SecondFrameComponent from "../components/showcase/SecondFrameComponent.vue";
import axios from "axios";
export default {
  components: { FirstFrameComponent, SecondFrameComponent },
  data() {
    return {
      news: [
        {
          title: "Lorem",
          published: "12/09/2020",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          img: "",
        },
      ],
    };
  },
  mounted() {
    this.fetchNews();
  },
  computed: {
    last_news() {
      let array_tmp;
      array_tmp = this.news
        .sort((a, b) => new Date(a.published) - new Date(b.published))
        .slice(0, 3);
      return array_tmp;
    },
  },
  methods: {
    fetchNews() {
      axios
        .get("http://localhost:3000/news")
        .then((response) => {
          console.log(response.data);
          this.news = response.data;
        })
        .catch((error) => {
          console.error(error.response);
        });
    },
  },
};
</script>

<style></style>
