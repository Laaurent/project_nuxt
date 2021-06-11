<template>
  <div class="new_wrapper">
    <div class="new_img_wrapper">
      <div
        class="new_img"
        :style="
          'background-image: url(' +
            new_item.img +
            '), linear-gradient(#fefff8 50%, #140c3d) '
        "
      ></div>
    </div>
    <div class="new_text">
      <h4>{{ new_item.title }}</h4>
      <h5>{{ new_item.published }}</h5>
      <p>{{ new_item.content }}</p>
      <button class="" @click="redirectToRoute(new_item.id)">
        En savoir plus <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["new_item"],
  methods: {
    redirectToRoute: function(id) {
      window.location.href = "/new/" + id;
    }
  }
};
</script>

<style></style>
