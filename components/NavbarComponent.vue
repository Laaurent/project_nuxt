<template>
  <div class="navbar_wrapper">
    <div class="navbar_container">
      <ul>
        <li>Logo</li>
        <li>Actualité</li>
        <li>A propos</li>
      </ul>
      <ul>
        <template v-if="!isLogged">
          <li>Se connecter</li>
          <li>S'inscrire</li>
        </template>
        <template v-else>
          <li>IMG</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogged: false
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/components/navbar.scss";
</style>
