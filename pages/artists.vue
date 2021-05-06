<template>
  <div>
    <h2>Artistes</h2>
    <ul>
      <li v-for="artist in artists" :key="artist.id">
        <Artist :artist="artist"/>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import Artist from '../components/Artist'

export default {
  data() {
    return {
      artists: [],
      genres: [],
    }
  },
  components: {
    Artist
  },
  mounted() {
    let tmpArtists = [];
    
    this.getArtists()
      .then(a => {
        tmpArtists = a;
        this.getGenres()
          .then(g => {
            this.genres = g;
            this.setGenres(tmpArtists);
            this.artists = tmpArtists;
        });
    });
  },
  methods: {
    getArtists(){
      return axios.get('http://localhost:3000/artists')
        .then(a => a.data)
        .catch(err => console.error('failed to get artists\n',err))
    },
    getGenres(){
      return axios.get('http://localhost:3000/genres')
        .then(g => g.data)
        .catch(err => console.error('Failed to get genres\n',err))
    },
    setGenres(tmpArtists){
      tmpArtists.forEach(a => {
        a.genre = this.genres.find(g => g.id === a.genreId).name;
      });
    }

  }
}
</script>

<style>

</style>