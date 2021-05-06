<template>
  <div>
    <h2>Artistes</h2>
    <button @click="getArtists"> clic me</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      artists: []
    }
  },
  methods: {
    getArtists(){
      axios.get('localhost:3000')
        .then(data => console.log(data))
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>