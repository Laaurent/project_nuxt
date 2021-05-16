<template>
  <div>
    <div class="albumcard_wrapper">
      <div
        class="albumcard_avatar"
        :style="
          'background-image: url(' +
          album.avatar +
          '), linear-gradient(#fefff8 50%, #140c3d) '
        "
      ></div>
      <div class="albumcard_info">
        <h6>{{ album.name }}</h6>
        <p>{{ album.released }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["album"],
  data() {
    return {};
  },
};
</script>

<style>
</style>