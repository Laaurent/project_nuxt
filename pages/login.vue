<template>
  <div>
    <div class="wrapper">
      <div></div>
      <!-- FORMULAIRE -->
      <div class="form">
        <div class="form_item">
          <h1>Connectez vous !</h1>
          <form action="" @submit.prevent="login">
            <input
              v-model="user.email"
              type="mail"
              name="id"
              id="id"
              placeholder="Entrez votre email "
            />

            <input
              v-model="user.password"
              type="password"
              name="password"
              id="password"
              placeholder="Entrez votre mot de passe "
            />

            <input type="submit" value="Se connecter" />
            <NuxtLink class="form_link" to="/register"
              >Vous ne possedez pas de compte ?</NuxtLink
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  layout: "pageOnly",
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
