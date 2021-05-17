<template>
  <div class="albums_div" v-if="albums">
    <div class="albums_buttons">
      <button
        :disabled="left == 0"
        class="icon_round left_round"
        @click="
          left--;
          right--;
        "
      >
        <i class="fas fa-chevron-left"></i></button
      ><button
        :disabled="right == length"
        class="icon_round right_round"
        @click="
          right++;
          left++;
        "
      >
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <div class="albums_wrapper">
      <AlbumCardComponent
        v-for="(album, index) in albumsPreview"
        :key="index"
        :album="album"
      />
    </div>
  </div>
</template>

<script>
import AlbumCardComponent from "./AlbumCardComponent.vue";

export default {
  components: { AlbumCardComponent },
  props: ["albums"],
  data() {
    return {
      left: 0,
      right: 6,
    };
  },
  computed: {
    length: function () {
      if (this.albums) {
        if (this.albums.length < this.right) this.right = this.albums.length;
        return this.albums.length;
      }
    },
    albumsPreview: function () {
      if (this.albums && this.length) {
        return this.albums.slice(this.left, this.right);
      }
    },
  },
};
</script>

<style>
</style>