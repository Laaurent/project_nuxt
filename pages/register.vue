<template>
  <div>
    <!-- FORMULAIRE -->
    <form action="" @submit.prevent="register">
      <label for="id">Identifiant</label>
      <input type="text" name="id" id="id" placeholder=" - " />

      <label for="password">Mot de passe</label>
      <input type="password" name="password" id="password" placeholder=" - " />

      <label for="password2">Confirmation mot de passe</label>
      <input type="password" name="password" id="password2" placeholder=" - " />

      <input type="submit" value="S'inscrire" />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      console.log("register");
    },
  },
};
</script>

<style>
  @import "@/assets/scss/components/form.scss";
</style>