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
      <h3>Daily MEWS</h3>
      <div class="head_news">
        <ul>
          <li v-for="(item, index) in news" :key="index">
            <button class="item_news">
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
  props: ["news"]
};
</script>

<style></style>
