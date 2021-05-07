<template>
  <div class="navbar_wrapper">
    <div class="navbar_container">
      <ul>
        <!-- <li>Logo</li> -->
        <li :class="this.$route.name == 'artists' ? 'isActive' : ''">
          <NuxtLink to="/artists">Artistes</NuxtLink>
        </li>
        <li :class="this.$route.name == 'news' ? 'isActive' : ''">
          <NuxtLink to="/news">Actualités</NuxtLink>
        </li>
        <li>A propos</li>
      </ul>
      <ul>
        <template v-if="!isLogged">
          <li :class="this.$route.name == 'login' ? 'isActive' : ''">
            <NuxtLink to="/login">Se connecter</NuxtLink>
          </li>
          <li
            class="li_register"
            :class="this.$route.name == 'register' ? 'isActive' : ''"
          >
            <NuxtLink to="/register">S'inscrire</NuxtLink>
          </li>
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
      isLogged: false,
    };
  },
};
</script>
