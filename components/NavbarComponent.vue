<template>
  <div class="navbar_wrapper">
    <div class="navbar_container">
      <ul>
        <li>Logo</li>
        <li><NuxtLink to="/artists">Artistes</NuxtLink></li>
        <li><NuxtLink to="/news">Actualités</NuxtLink></li>
        <li>A propos</li>
      </ul>
      <ul>
        <template v-if="!isLogged">
          <li><NuxtLink to="/login">Se connecter</NuxtLink></li>
          <li><NuxtLink to="/register">S'inscrire</NuxtLink></li>
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
