<template>
  <div class="main">
    <div class="form-wrapper">
      <form @submit.prevent="updateUser" method="post">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" required />

        <label for="password">Mot de passe</label>
        <input type="password" v-model="password" id="password" />

        <label for="password2">Mot de passe</label>
        <input type="password" v-model="password2" id="password2" />

        <input type="submit" value="Modifier" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: this.$store.getters.getEmail,
      password: undefined,
      password2: undefined,
    };
  },
  mounted() {},
  methods: {
    updateUser: function () {
      this.$store
        .dispatch("updateUser", { email: this.email, password: this.password })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error.response);
        });
    },
  },
};
</script>

<style>
</style>