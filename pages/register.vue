<template>
  <div>
    <div class="wrapper">
      <div></div>
      <!-- FORMULAIRE -->
      <div class="form">
        <div class="form_item">
          <h1>Inscrivez vous !</h1>
          <form action="" @submit.prevent="register">
            <input
              v-model="user.email"
              type="email"
              name="id"
              id="id"
              placeholder="Entrez votre email"
            />

            <input
              v-model="user.password"
              type="password"
              name="password"
              id="password"
              placeholder="Entrez votre mot de passe"
            />

            <input
              v-model="user.password2"
              type="password"
              name="password"
              id="password2"
              placeholder="Confirmez votre mot de passe "
            />

            <input type="submit" value="S'inscrire" />
            <NuxtLink class="form_link" to="/login"
              >Vous possedez déjà un compte ?</NuxtLink
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