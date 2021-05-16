<template>
  <div class="badge_wrapper" :style="'background-color: ' + color">
    <p>{{ data.toUpperCase()}}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    color: function () {
      switch (this.data) {
        case "rock":
          return "#FFADAD";
        case "Hip-Hop":
          return "#FFD6A5";
        case "rap":
          return "#FDFFB6";
        case "classical":
          return "#CAFFBF";
        case "electro":
          return "#9BF6FF";
        case "rnb":
          return "#A0C4FF";
        case "alternative":
          return "#BDB2FF";
        case "jazz":
          return "#FFC6FF";

        default:
          return "#aaa";
      }
    },
  },
};
</script>

<style>
</style>