<template>
  <div class="main">
    <FirstFrameComponent />
    <SecondFrameComponent />
  </div>
</template>

<script>
import FirstFrameComponent from "../components/showcase/FirstFrameComponent.vue";
import SecondFrameComponent from "../components/showcase/SecondFrameComponent.vue";
export default {
  components: { FirstFrameComponent, SecondFrameComponent },
};
</script>

<style>
</style>
