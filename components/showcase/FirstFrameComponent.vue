<template>
  <div class="first_frame_wrapper">
    <div class="first_frame">
      <div class="title">
        <h1>LOREM IPSUM</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          iusto tempore dolore vel nobis vero, saepe asperiores nesciunt
          sapiente consectetur totam quaerat dignissimos aspernatur quisquam
          suscipit ratione corporis fugiat ea.
        </p>
      </div>
      <h4>Daily MEWS</h4>
      <div class="head_news">
        <ul>
          <li v-for="(item, index) in last_news" :key="index">
            <button class="item_news" @click="redirectToRoute(item.id)">
              <div>
                <h4>{{ item.title }}</h4>
                <p class="resum">{{ item.content.substring(0, 50) }}...</p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["news"],
  data() {
    return {
      last_news: null,
    };
  },
  mounted() {
    let array_tmp;
    array_tmp = [...this.news];
    this.last_news = array_tmp
      .sort((a, b) => new Date(a.published) - new Date(b.published))
      .slice(0, 3);
  },
  methods: {
    redirectToRoute: function (id) {
      window.location.href = "/new/" + id;
    },
  },
};
</script>

<style></style>
