<template>
  <div>
    <h2>Artistes</h2>
    <ul>
      <li v-for="artist in artists" :key="artist.id">
        <Artist :artist="artist"/>
        <hr>
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
      albums: [],
      concerts: []
    }
  },
  components: {
    Artist
  },
  mounted() {
    this.getArtists().then((a) => {
      const reqGenres = this.getGenres().then(() => this.setGenres(a));
      const reqAlbums = this.getAlbums().then(() => this.setAlbums(a));
      const reqConcerts = this.getConcerts().then(() => this.setConcerts(a));

      Promise.all([reqGenres, reqAlbums, reqConcerts])
        .then(() => this.artists = a);
    });
  },
  methods: {
    // GETTERS
    getArtists(){
      return axios.get('http://localhost:3000/artists')
        .then(a =>  a.data)
        .catch(err => console.error('failed to get artists\n',err))
    },
    getGenres(){
      return axios.get('http://localhost:3000/genres')
        .then(g => this.genres = g.data)
        .catch(err => console.error('Failed to get genres\n',err))
    },
    getAlbums(){
      return axios.get('http://localhost:3000/albums')
        .then(a => this.albums = a.data)
        .catch(err => console.error('Failed to get albums\n',err))
    },
    getConcerts(){
      return axios.get('http://localhost:3000/concerts')
        .then(c => this.concerts = c.data)
        .catch(err => console.error('Failed to get concerts\n',err))
    },

    // SETTERS
    setGenres(tmpArtists){
      tmpArtists.forEach(a => {
        a.genre = this.genres.find(g => g.id === a.genreId).name;
      });
    },
    setAlbums(tmpArtists){
      tmpArtists.forEach(artist => {
        artist.albums = this.albums.filter(album => album.artistId === artist.id);
      });
    },
    setConcerts(tmpArtists){
      tmpArtists.forEach(artist => {
        artist.concerts = this.concerts.filter(concert => concert.artistId === artist.id);
      });
    }
  }
}
</script>

<style scoped>

:is(li){
  list-style: none;
  padding: 8px;
  margin: 8px;
  border: 2px solid rgb(200, 200, 200);
  border-radius: 8px;
}

</style>