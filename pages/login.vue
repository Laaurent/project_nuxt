<template>
  <div>
    <!-- FORMULAIRE -->
    <form action="" @submit.prevent="login">
      <label for="id">Identifiant</label>
      <input
        v-model="user.email"
        type="text"
        name="id"
        id="id"
        placeholder=" - "
      />

      <label for="password">Mot de passe</label>
      <input
        v-model="user.password"
        type="password"
        name="password"
        id="password"
        placeholder=" - "
      />

      <input type="submit" value="Se connecter" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        email: undefined,
        password: undefined,
      },
    };
  },
  methods: {
    login() {
      axios
        .post(
          `http://localhost:3000/login`,
          { email: this.user.email, password: this.user.password },
          { withCredentials: true }
        )
        .then((response) => console.log(response));
    },
  },
};
</script>

<style>
  @import "@/assets/scss/components/form.scss";
</style>