<template>
  <div>
    <div class="wrapper">
      <div class="img">
        <img src="@/assets/images/svg/listening.svg" alt="imagination image" />
      </div>
      <!-- FORMULAIRE -->
      <div class="form">
        <div class="form_item">
          <h1>Connectez vous !</h1>

          <div class="error" v-if="error">
            <i class="fas fa-exclamation-circle"></i> Identifiant ou mot de
            passe incorrect !
          </div>

          <form action="" @submit.prevent="login">
            <div class="input_div">
              <input
                v-model="user.email"
                type="mail"
                name="id"
                id="id"
                placeholder="Entrez votre email "
              />
              <span :class="this.user.email_error ? 'is_error' : ''"></span>
            </div>

            <div class="input_div">
              <input
                v-model="user.password"
                type="password"
                name="password"
                id="password"
                placeholder="Entrez votre mot de passe "
                minlength="4"
              />
              <span :class="this.user.password_error ? 'is_error' : ''"></span>
            </div>

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
        email_error: false,
        password: undefined,
        password_error: false
      },
      error: false
    };
  },
  watch: {
    "user.email": function() {
      this.reset();
    },
    "user.password": function() {
      this.reset();
    }
  },
  methods: {
    reset() {
      this.error = false;
      this.user.email_error = false;
      this.user.password_error = false;
    },
    login() {
      this.user.email_error = false;
      this.user.password_error = false;

      if (!this.user.email) {
        this.user.email_error = true;
      }
      if (!this.user.password) {
        this.user.password_error = true;
      }
      if (!this.user.password_error && !this.user.email_error) {
        this.$auth.loginWith(
            `local`,
            { data: {email: this.user.email, password: this.user.password}  }
          )
          .then(response => {
            console.log(response.data);
            this.error = false;
            this.user.email_error = false;
            this.user.password_error = false;
            //* STORE LE TOKEN SOLIMAN
            this.$router.push("/");
          })
          .catch(error => {
            console.error(error.response.data);
            this.error = true;
          });
      }
    }
  }
};
</script>
