<template>
  <div class="navbar_wrapper">
    <div class="navbar_container">
      <ul>
        <li>
          <NuxtLink class="logo_mews" to="/">
            <svg
              version="1.1"
              id="Calque_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 797.5 259.2"
              style="enable-background: new 0 0 797.5 259.2"
              xml:space="preserve"
            >
              <style type="text/css">
                .st0 {
                  font-family: "OhnoBlazeface-12Point";
                }
                .st1 {
                  font-size: 243.36px;
                }
                .st2 {
                  letter-spacing: -2;
                }
              </style>
              <g id="Calque_2_1_">
                <g id="Calque_1-2">
                  <text transform="matrix(1 0 0 1 0 198.34)" class="st0 st1">
                    M
                  </text>
                  <text
                    transform="matrix(1 0 0 1 242.63 198.34)"
                    class="st0 st1"
                  >
                    E
                  </text>
                  <text
                    transform="matrix(1 0 0 1 403.98 198.34)"
                    class="st0 st1 st2"
                  >
                    W
                  </text>
                  <text
                    transform="matrix(1 0 0 1 647.58 198.34)"
                    class="st0 st1"
                  >
                    S
                  </text>
                </g>
              </g>
            </svg>
          </NuxtLink>
        </li>
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
