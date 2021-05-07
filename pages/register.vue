<template>
  <div>
    <div class="wrapper">
      <div class="img">
        <img
          class="register_img"
          src="@/assets/images/svg/post.svg"
          alt="mello image"
        />
      </div>
      <!-- FORMULAIRE -->
      <div class="form">
        <div class="form_item">
          <h1>Inscrivez vous !</h1>

          <div class="error" v-if="error">
            <i class="fas fa-exclamation-circle"></i> L'email est déjà utilisée
            ! <NuxtLink class="error" to="/login">Se connecter</NuxtLink>
          </div>

          <form action="" @submit.prevent="register">
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

            <div class="input_div">
              <input
                v-model="user.password2"
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirmez votre mot de passe "
                minlength="4"
              />
              <span :class="this.user.password2_error ? 'is_error' : ''"></span>
            </div>

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
        email_error: false,
        password: undefined,
        password_error: false,
        password2: undefined,
        password2_error: false
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
    },
    "user.password2": function() {
      this.reset();
    }
  },
  methods: {
    reset() {
      this.error = false;
      this.user.email_error = false;
      this.user.password_error = false;
      this.user.password2_error = false;
    },
    register() {
      this.user.email_error = false;
      this.user.password_error = false;

      if (!this.user.email) {
        this.user.email_error = true;
      }
      if (!this.user.password) {
        this.user.password_error = true;
      }
      if (!this.user.password2) {
        this.user.password2_error = true;
      }
      if (this.user.password != this.user.password2) {
        this.user.password_error = true;
        this.user.password2_error = true;
      }
      if (
        !this.user.password_error &&
        !this.user.email_error &&
        !this.user.passwor2_error
      ) {
        axios
          .post(
            `http://localhost:3000/register`,
            { email: this.user.email, password: this.user.password },
            { withCredentials: true }
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
