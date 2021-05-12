<template>
  <div class="searchbar_wrapper">
    <input
      type="search"
      name="searchBar"
      id=""
      v-model="pattern"
      placeholder="Nom de l'artiste que vous cherchez ..."
      @keyup.enter="$emit('getPattern', pattern)"
    />
    <button @click="$emit('getPattern', pattern)">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pattern: "",
    };
  },
};
</script>

<style>
</style>