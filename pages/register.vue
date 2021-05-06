<template>
  <div>
    <!-- FORMULAIRE -->
    <form action="" @submit.prevent="register">
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

      <label for="password2">Confirmation mot de passe</label>
      <input
        v-model="user.password2"
        type="password"
        name="password"
        id="password2"
        placeholder=" - "
      />

      <input type="submit" value="S'inscrire" />
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
        password2: undefined,
      },
    };
  },
  methods: {
    register() {
      console.log("register");
      axios
        .post(
          `http://localhost:3000/register`,
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